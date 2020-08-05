
import { INCREMENT, DECREMENT } from '../actions/ActionTypes';
const counter = (times=0, action) => {
    switch(action.type) {
        case INCREMENT:
          return times + action.step;
        case DECREMENT:
            return times - action.step;
        default:
            return times;
    }
}
export default counter;