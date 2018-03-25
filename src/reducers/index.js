import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from './reducer_login';
import ActivateMenuReducer from './reducer_activate-menu';
import ChangeInfoTextReducer from './reducer_active-text';
import UserReadyReducer from './reducer_user-ready';
import ChangeRoomsReducer from './reducer_rooms';

const rootReducer = combineReducers({
    loggedInUser: LoginReducer,
    form: formReducer,
    menu: ActivateMenuReducer,
    infoText: ChangeInfoTextReducer,
    isReady: UserReadyReducer,
    room: ChangeRoomsReducer
});

export default rootReducer;