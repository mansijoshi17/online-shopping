import { all, call } from 'redux-saga/effects';

import { shopSagas } from './Shop/Shop.saga';
import { userSaga } from './user/user.saga';
import { cartSaga } from './Cart/Cart.saga';

export default function* rootSaga() {
    yield all([call(shopSagas), call(userSaga), call(cartSaga)]);
}