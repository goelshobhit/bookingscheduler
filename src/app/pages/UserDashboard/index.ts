import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { userDashboardSaga } from './saga';
import { UserDashboardState } from './types';

export const initialState: UserDashboardState = {
  isLoading: false,
  params: '',
  data: '',
  createJobData: '',
};

const slice = createSlice({
  name: 'userDashboard',
  initialState,
  reducers: {
    getUserInfo(state, action: PayloadAction<any>) {
      state.isLoading = true;
      state.params = action.payload;
    },
    getUserInfoSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    getUserInfoError(state, action: PayloadAction<any>) {
      state.isLoading = false;
    },
    createJob(state, action: PayloadAction<any>) {
      state.createJobData = action.payload;
    },
    createJobSuccess(state) {
      state.createJobData = '';
    },
  },
});

export const { actions: userDashboardActions } = slice;

export const useUserDashboardSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: userDashboardSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useUserDashboardSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
