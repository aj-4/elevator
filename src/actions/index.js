export const LOGIN_USER = 'LOGIN_USER';
export const ACTIVATE_MENU = 'ACTIVATE_MENU';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const USER_READY = 'USER_READY';
export const ADD_ROOM = 'ADD_ROOM';
export const POP_ROOM = 'POP_ROOM';

export function LoginUser (values) {
    return {
        type: LOGIN_USER,
        payload: values
    }
}

export function ActivateMenu () {
    return {
        type: ACTIVATE_MENU
    }
}

export function ChangeInfoText(text) {
    return {
        type: CHANGE_TEXT,
        payload: text
    }
}

export function UserReadyAction() {
    return {
        type: USER_READY
    }
}

export function ActionAddRoom(room) {
    return {
        type: ADD_ROOM,
        payload: room
    }
}

export function ActionPopRoom() {
    return {
        type: POP_ROOM
    }
}