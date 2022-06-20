/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GModule-2.0
 */

import type * as Gjs from './Gjs';
import type * as GLib from './GLib-2.0';
import type * as GObject from './GObject-2.0';

/**
 * Flags passed to g_module_open().
 * Note that these flags are not supported on all platforms.
 */
export enum ModuleFlags {
    /**
     * specifies that symbols are only resolved when
     *     needed. The default action is to bind all symbols when the module
     *     is loaded.
     */
    LAZY,
    /**
     * specifies that symbols in the module should
     *     not be added to the global name space. The default action on most
     *     platforms is to place symbols in the module in the global name space,
     *     which may cause conflicts with existing symbols.
     */
    LOCAL,
    /**
     * mask for all flags.
     */
    MASK,
}
export function module_build_path(directory: string | null, module_name: string): string
export function module_error(): string
export function module_supported(): boolean
/**
 * Specifies the type of the module initialization function.
 * If a module contains a function named g_module_check_init() it is called
 * automatically when the module is loaded. It is passed the #GModule structure
 * and should return %NULL on success or a string describing the initialization
 * error.
 */
export interface ModuleCheckInit {
    (module: Module): string
}
/**
 * Specifies the type of the module function called when it is unloaded.
 * If a module contains a function named g_module_unload() it is called
 * automatically when the module is unloaded.
 * It is passed the #GModule structure.
 */
export interface ModuleUnload {
    (module: Module): void
}
export class Module {
    /* Methods of GModule-2.0.GModule.Module */
    /**
     * Closes a module.
     */
    close(): boolean
    /**
     * Ensures that a module will never be unloaded.
     * Any future g_module_close() calls on the module will be ignored.
     */
    make_resident(): void
    /**
     * Returns the filename that the module was opened with.
     * 
     * If `module` refers to the application itself, "main" is returned.
     */
    name(): string
    /**
     * Gets a symbol pointer from a module, such as one exported
     * by #G_MODULE_EXPORT. Note that a valid symbol can be %NULL.
     * @param symbol_name the name of the symbol to find
     */
    symbol(symbol_name: string): [ /* returnType */ boolean, /* symbol */ object | null ]
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * A portable way to build the filename of a module. The platform-specific
     * prefix and suffix are added to the filename, if needed, and the result
     * is added to the directory, using the correct separator character.
     * 
     * The directory should specify the directory where the module can be found.
     * It can be %NULL or an empty string to indicate that the module is in a
     * standard platform-specific directory, though this is not recommended
     * since the wrong module may be found.
     * 
     * For example, calling g_module_build_path() on a Linux system with a
     * `directory` of `/lib` and a `module_name` of "mylibrary" will return
     * `/lib/libmylibrary.so`. On a Windows system, using `\Windows` as the
     * directory it will return `\Windows\mylibrary.dll`.
     * @param directory the directory where the module is. This can be     %NULL or the empty string to indicate that the standard platform-specific     directories will be used, though that is not recommended
     * @param module_name the name of the module
     */
    static build_path(directory: string | null, module_name: string): string
    /**
     * Gets a string describing the last module error.
     */
    static error(): string
    /**
     * Checks if modules are supported on the current platform.
     */
    static supported(): boolean
}