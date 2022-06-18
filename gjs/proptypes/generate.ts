import {
  ClassDeclaration,
  createSourceFile,
  ModifiersArray,
  Node,
  PropertyDeclaration,
  ScriptTarget,
  SyntaxKind,
} from "typescript";
import { writeFileSync, readFileSync, mkdirSync } from "fs";
import path from "path";
import { format } from "prettier";
/**
 *
 */
(function main({ proptypes, outDir, scriptTarget }: Config) {
  let output: Out = {};
  for (let [filePath, classNames] of Object.entries(proptypes.classes)) {
    const { basename, code, dirname, filename } = fileInfo(
      proptypes.module,
      filePath
    );

    const target: ScriptTarget =
      // @ts-ignore
      ScriptTarget[scriptTarget] || ScriptTarget.ESNext;

    const sourceFile = createSourceFile(
      basename,
      code,
      target,
      /*setParentNodes*/ true
    );
    for (const className of classNames) {
      sourceFile.forEachChild(
        findClass(
          ofName(
            className,
            getProps((props) => {
              output = {
                ...output,
                [className]: {
                  declaration: declareProps(className, props),
                  imports: toImports(className, proptypes, dirname, filename),
                },
              };
            })
          )
        )
      );
    }
    write(`${proptypes.outDir}/${filename}/index.d.ts`, format(toText(output)));
  }
  /**
   *
   * @param fileName
   * @param content
   */
  function write(fileName: string, content: string) {
    const p = path.join(outDir, fileName);
    mkdirSync(path.dirname(p), { recursive: true });
    writeFileSync(p, content);
  }
})(config());
/** */
type Out = {
  [s: string]: { imports: string; declaration: string };
};
/**
 *
 * @param filePath
 * @returns
 */
function fileInfo(module: string, filePath: string) {
  // @ts-ignore
  const root = path.dirname(require.resolve(module));
  const basename = path.basename(filePath);
  const filename = basename.replace(".d.ts", "");
  const dirname = path.dirname(filePath);
  const code = readFileSync(path.join(root, filePath), "utf-8");
  return { basename, code, dirname, filename };
}

/**
 *
 * @param className
 * @param proptypes
 * @param dirname
 * @param filename
 * @returns
 */
function toImports(
  className: string,
  proptypes: {
    outDir: string;
    module: string;
    classes: { [s: string]: string[] };
  },
  dirname: string,
  filename: string
): string {
  return `import { ${className} } from "${proptypes.module}/${dirname}/${filename}";`;
}

/**
 *
 * @param output
 * @returns
 */
function toText(output: Out) {
  const i = Object.entries(output)
    .map(([className, { declaration, imports }]) => imports)
    .join("\n");
  const d = Object.entries(output)
    .map(([className, { declaration, imports }]) => declaration)
    .join("\n");

  return [i, "/* Props */", d].join("\n");
}
/**
 *
 * @param className
 * @param props
 * @returns
 */
function declareProps(className: string, props: PropertyDeclaration[]) {
  const pick = props.map((prop) => `"${prop.name?.getText()}"`).join("|");
  return `export type ${className}Props = Partial<Pick<${className},${pick}>>;`;
}

/**
 *
 * @param name
 * @param callback
 * @returns
 */
function ofName(name: string, callback: (node: ClassDeclaration) => any) {
  return (node: ClassDeclaration) => {
    if (node.name?.text === name) {
      callback(node);
    }
  };
}
/**
 *
 * @param yields
 * @returns
 */
function getProps(yields: (props: PropertyDeclaration[]) => any) {
  return (node: ClassDeclaration) => {
    const props: PropertyDeclaration[] = [];
    // write(`${className}.d.ts`, node.getText());
    node.forEachChild(
      findProperty((prop) => {
        const ignored =
          prop.modifiers &&
          ignore(
            prop.modifiers,
            SyntaxKind.ReadonlyKeyword,
            SyntaxKind.StaticKeyword
          );
        if (!ignored) {
          props.push(prop);
        }
      })
    );
    yields(props);
  };
}
/**
 *
 */
type Config = {
  outDir: string;
  scriptTarget: string;
  proptypes: {
    outDir: string;
    module: string;
    classes: { [s: string]: string[] };
  };
};
/**
 *
 * @returns
 */
function config(): Config {
  return JSON.parse(
    readFileSync(path.join(process.cwd(), "generate.json"), "utf-8")
  );
}
/**
 *
 * @param modifiers
 * @param syntaxKind
 * @returns
 */
function ignore(modifiers: ModifiersArray, ...syntaxKind: SyntaxKind[]) {
  for (const modifier of modifiers) {
    for (const kind of syntaxKind) {
      if (modifier.kind === kind) {
        return true;
      }
    }
  }
  return false;
}
/**
 *
 * @param yields
 * @returns
 */
function findClass(yields: (node: ClassDeclaration) => any) {
  return (node: Node): void => {
    if (node.kind === SyntaxKind.ClassDeclaration) {
      yields(node as ClassDeclaration);
    }
    return node.forEachChild(findClass(yields));
  };
}
/**
 *
 * @param yields
 * @returns
 */
function findProperty(yields: (node: PropertyDeclaration) => any) {
  return (member: Node) => {
    if (member.kind === SyntaxKind.PropertyDeclaration) {
      yields(member as PropertyDeclaration);
    }
  };
}
