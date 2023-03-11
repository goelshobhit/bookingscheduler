import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.userDashboard || initialState;

export const selectUserDashboard = createSelector(
  [selectSlice],
  state => state,
);

export const selectUserData = createSelector(
  [selectSlice],
  state => state?.data,
);

export const selectUserLoading = createSelector(
  [selectSlice],
  state => state?.isLoading,
);
