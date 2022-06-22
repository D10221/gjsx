export const actionTypes = {
    QUIT: "window:action:quit"
}
export const actions = {
    quit() {
        return { type: actionTypes.QUIT }
    }
}
export const signals = {
    [actionTypes.QUIT]: {
        name: "win.quit",
        signal: "quit"
    }
}
export type ActionTypes = typeof actionTypes;
export type Actions = typeof actions;