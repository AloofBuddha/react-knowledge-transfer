import { fromJS } from 'immutable';
import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_DOG_IMAGE, FETCH_DOG_IMAGE_SUCCESS } from './actions';

function* fetchDogImage() {
    const post = yield call(fetch, 'https://dog.ceo/api/breeds/image/random');
    const response = yield post.json();

    if (response.status === "success") {
        yield put({
            type: FETCH_DOG_IMAGE_SUCCESS,
            results: fromJS(response)
        })
    } else {
        console.error("something went wrong!", response);
    }
}

export default function* rootSaga() {
    yield takeLatest(FETCH_DOG_IMAGE, fetchDogImage);
}

