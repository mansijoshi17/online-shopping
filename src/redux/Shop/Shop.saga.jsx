import { takeEvery, call , put} from 'redux-saga/effects';

import ShopActionTypes from './Shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../Firebase/Firebase';
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './Shop.action';



export function* fetchCollectionsAsync() {
    yield console.log("I am fired");
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsmap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsmap));
    } catch (error) {
          yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}