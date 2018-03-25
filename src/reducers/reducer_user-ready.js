import { USER_READY } from '../actions';

export default function (state = false, action) {
    switch(action.type) {
        case USER_READY:
            return !state
        default: 
            return state;
    }
}