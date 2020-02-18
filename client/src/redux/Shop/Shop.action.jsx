import ShopActionTypes from './Shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../Firebase/Firebase';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload : collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload : errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());


    // fetch('https://firestore.googleapis.com/v1/projects/crwn-database-87c16/databases/(default)/documents/collections')
    //     .then(Response =>  Response.json() )
    //     .then(collections => console.log(collections));   //get firbase data using REST API Call.

    collectionRef.get().then(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
  }
};