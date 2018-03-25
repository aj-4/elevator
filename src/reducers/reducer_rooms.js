import { ADD_ROOM } from '../actions';

export default function (state = {}, action) {
    switch(action.type) {
        case ADD_ROOM:
            return Object.assign({}, state, {
                name: action.payload.data.name,
                job: action.payload.data.job,
                roomId: action.payload.data.roomId
            })
        default:
            return state;
    }
}