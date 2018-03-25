import { ADD_ROOM, POP_ROOM } from '../actions';
import tooltips from '../site_text/tooltips';

export default function (state = [], action) {
    switch (action.type) {
        case (ADD_ROOM):
            return [...state, action.payload]
        case (POP_ROOM):
            return state.slice(1);
        default:
            return state;
    }
}