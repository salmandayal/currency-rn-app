import axios from 'axios';
import {call, takeEvery, put} from 'redux-saga/effects';
import {
  getDataFailure,
  getDataFetch,
  getDataSuccess,
} from '../reducers/userReducer';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

//'http://fixer.handlebarlabs.com/latest?base=USD' URL not working

let fetchData = () => axios.get('https://jsonplaceholder.typicode.com/todos');

export function* fetchDataSaga() {
  try {
    let result: ResponseGenerator = yield call(fetchData);
    yield put(getDataSuccess(result.data.slice(0, 5)));
  } catch (e) {
    yield put(getDataFailure());
  }
}

export default function* rootSaga() {
  yield takeEvery(getDataFetch.type, fetchDataSaga);
}
