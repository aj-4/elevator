import { CHANGE_TEXT } from '../actions';
import tooltips from '../site_text/tooltips';

export default function (state = {txt: tooltips.welcome}, action) {
    switch(action.type) {
        case (CHANGE_TEXT):
            return Object.assign({}, state, {
                txt: tooltips[action.payload]
            })
        default:
            return state;
    }
}