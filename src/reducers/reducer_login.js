import { LOGIN_USER } from '../actions/index';

export default function (state = {}, action) {
    switch(action.type) {
        case LOGIN_USER: 
            return Object.assign({}, state, {
                name: action.payload.name,
                job: action.payload.profession
            })
        default:
            return state;
    }
}