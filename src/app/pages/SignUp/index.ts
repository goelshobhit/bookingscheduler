import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { signUpSaga } from './saga';
import { SignUpState } from './types';

export const initialState: SignUpState = {
  params: {},
  isLoading: false,
};

const slice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    createUser(state, action: PayloadAction<any>) {
      state.isLoading = true;
      state.params = action.payload;
    },
    createUserSuccess(state) {
      state.isLoading = false;
      state.params = {};
    },
  },
});

export const { actions: signUpActions } = slice;

export const useSignUpSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: signUpSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSignUpSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
