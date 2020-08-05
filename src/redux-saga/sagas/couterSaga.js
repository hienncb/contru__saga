
import { put, takeEvery} from 'redux-saga/effects'
import { INCREMENT, DECREMENT } from '../actions/ActionTypes'


export function* sayhello(){
    console.log('hello wold')
}

function* increment(){
    console.log('this is increment')
}

export function* watchIncrement(){
    yield takeEvery(INCREMENT, increment)
}

function* decrement(){
    console.log('this is decrement')
}

export function* watchDecrement(){
    console.log("@@@@@@@@@@@@@")
    yield takeEvery(DECREMENT, decrement)
}