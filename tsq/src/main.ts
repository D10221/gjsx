import { ClassDeclaration, createSourceFile, Node, PropertyDeclaration, ScriptTarget, SourceFile, SyntaxKind } from 'typescript';
import { readFileSync } from "fs"
import path from "path"

const [filePath, className] = process.argv.slice(2);
const code = readFileSync(filePath, "utf-8")

const sourceFile = createSourceFile(path.basename(filePath), code, ScriptTarget.Latest, true);

const readOnlyProps: any[]= [];

sourceFile.forEachChild(findClass);

function findClass(node: Node) {
    if (node.kind === SyntaxKind.ClassDeclaration) {
        const { name } = (node as ClassDeclaration);
        if (name?.text === className) {
            node.forEachChild(findProperty);
            return;
        }
    }
    node.forEachChild(findClass);
}

function findProperty(member: Node): void {
    if (member.kind === SyntaxKind.PropertyDeclaration) {
        const { name, modifiers, ...rest } = (member as PropertyDeclaration)
        const text = name?.getText();
        if (text) {
            if (modifiers) {
                const skip = modifiers.reduce((out, mod) => {
                    return out || mod.kind === SyntaxKind.ReadonlyKeyword
                }, false);
                if (skip) {
                    readOnlyProps.push(text)
                }
            }
        }
    }
}

console.log(readOnlyProps)