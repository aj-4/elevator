import { USER_READY } from '../actions';

export default function (state = false, action) {
    console.log('in reducer');
    switch(action.type) {
        case USER_READY:
            return !state
        default: 
            return state;
    }
}