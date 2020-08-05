import { connect } from 'react-redux';
import CouterComponent from '../screens/ex'
import * as action from '../redux-saga/actions/action';



const mapStateToProps = (state) => {
    return {
        times: state.counter ? state.counter: 0
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: (step)=>{
            dispatch(action.decreaseAction(step))
        },
        onIncrement: (step)=>{
            dispatch(action.increaseAction(step))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CouterComponent)
