import { ACTIVATE_MENU } from '../actions/index';

export default function (state = false, action) {
    switch (action.type) {
        case ACTIVATE_MENU:
            return !state;
        default:
            return state;
    }
}