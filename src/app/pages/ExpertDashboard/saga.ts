import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { expertDashboardActions as actions } from '.';

function* handleGetData(userActions) {
  const { payload: userObjectId } = userActions;

  try {
    const options = {
      url: '/api/auth/joblist',
      data: { id: userObjectId },
      method: 'POST',
    };

    const response = yield call(request, options);
    if (response?.data) {
      yield put(actions.getExpertDataSuccess(response?.data));
    }
  } catch (error) {
    //
  }
}

export function* expertDashboardSaga() {
  yield takeLatest(actions.getExpertData.type, handleGetData);
}
