import { LOADING_TODAY_MUSIC } from '../actions/ActionTypes';

const initialState = {
  
};

const select_date = (state = initialState, action) => {
  switch(action.type) {
    case LOADING_TODAY_MUSIC:
      //state = action.data
      state = action.payload
      return {
        //count: count + 1,
         ...state
      }
    default:
      return state;
  }
}

export default select_date;