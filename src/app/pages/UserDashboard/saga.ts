import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { userDashboardActions as actions } from '.';

function* handleUserInfo(userActions) {
  const { payload: userObjectId } = userActions;

  try {
    const options = {
      url: '/api/auth/userInfo',
      data: { id: userObjectId },
      method: 'POST',
    };

    const response = yield call(request, options);
    if (response?.data) {
      yield put(actions.getUserInfoSuccess(response?.data));
    }
  } catch (error) {
    yield put(actions.getUserInfoError(error));
  }
}

export function* userDashboardSaga() {
  yield takeLatest(actions.getUserInfo.type, handleUserInfo);
}
