import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { expertDashboardSaga } from './saga';
import { ExpertDashboardState } from './types';

export const initialState: ExpertDashboardState = {
  params: '',
  data: [],
};

const slice = createSlice({
  name: 'expertDashboard',
  initialState,
  reducers: {
    getExpertData(state, action: PayloadAction<any>) {
      state.params = action.payload;
    },
    getExpertDataSuccess(state, action: PayloadAction<any>) {
      state.params = '';
      state.data = action.payload;
    },
  },
});

export const { actions: expertDashboardActions } = slice;

export const useExpertDashboardSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: expertDashboardSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useExpertDashboardSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
