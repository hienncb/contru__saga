import {combineReducers} from 'redux';
import todayMusicReducer from './todayMusicReducer';

const rootReducer = combineReducers({
    todayMusicReducer,
});

export default rootReducer;
