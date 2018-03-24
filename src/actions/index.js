export const LOGIN_USER = 'LOGIN_USER';

export function LoginUser (values) {
    return {
        type: LOGIN_USER,
        payload: values
    }
}