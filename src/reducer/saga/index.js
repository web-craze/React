import { all } from 'redux-saga/effects';
import watchEmployeesSaga from './employees';

export default function* rootSaga() {
    yield all([
        watchEmployeesSaga(),
    ]);
}