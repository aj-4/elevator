export const LOGIN_USER = 'LOGIN_USER';
export const ACTIVATE_MENU = 'ACTIVATE_MENU';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const USER_READY = 'USER_READY';

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