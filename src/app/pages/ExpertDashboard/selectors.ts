import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.expertDashboard || initialState;

export const selectExpertDashboard = createSelector(
  [selectSlice],
  state => state,
);
