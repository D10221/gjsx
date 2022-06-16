/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * DBus-1.0
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';

export enum BusType {
    SESSION,
    SYSTEM,
    STARTER,
}
export class Connection {
    static name: string
}
export class Error {
    static name: string
}
export class Message {
    static name: string
}
export class MessageIter {
    static name: string
}
export class PendingCall {
    static name: string
}