import { delay } from 'redux-saga'
import { all } from 'redux-saga/effects';
import { sayhello, watchIncrement, watchDecrement } from './couterSaga'

export default function* rootSaga(){
    yield all({
        sayhello,
        watchIncrement,
        watchDecrement,
    })
}