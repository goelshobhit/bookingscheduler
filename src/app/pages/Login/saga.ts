import { call, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { setItem } from 'utils/storage';
import { loginActions as actions } from '.';

function* handleLogin(loginAction) {
  const {
    payload: { userId },
  } = loginAction;
  try {
    const options = {
      url: '/api/auth/login',
      data: { id: userId },
      method: 'POST',
    };

    const response = yield call(request, options);
    if (response?.data) {
      setItem('userInfo', response?.data);
      window.location.reload();
    }
  } catch (error) {
    // do nothing
  }
}

export function* loginSaga() {
  yield takeLatest(actions.login.type, handleLogin);
}
