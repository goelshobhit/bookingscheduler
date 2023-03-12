import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import request from 'utils/request';
import { signUpActions as actions } from '.';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

function* handleCreateUser(createUserAction) {
  const { payload } = createUserAction;

  const openNotificationWithIcon = (type: NotificationType, key) => {
    message.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      message.open({
        key,
        type: 'success',
        content: `please find your login key: ${key}`,
        duration: 8,
      });
    }, 1000);
  };
  try {
    const options = {
      url: '/api/auth/signUp',
      data: payload,
      method: 'POST',
    };

    const response = yield call(request, options);
    if (response?.data) {
      yield put(actions.createUserSuccess());
      openNotificationWithIcon('success', response?.data?.identifier);
    }
  } catch (error) {
    //
  }
}

export function* signUpSaga() {
  yield takeLatest(actions.createUser.type, handleCreateUser);
}
