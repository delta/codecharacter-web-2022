import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export const initialState = {
  loading: false,
  hasErrors: false,
  battletv: [],
};

const battleTvSlice = createSlice({
  name: 'BattleTv',
  initialState,
  reducers: {
    getBattleTv: state => {
      state.loading = true;
    },
    getBattleTvSuccess: (state, { payload }) => {
      state.battletv = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getBattleTvFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getBattleTv, getBattleTvSuccess, getBattleTvFailure } =
  battleTvSlice.actions;

// A selector
export const battleTvSelector = (state: RootState) => state.battletv;

// The reducer
export default battleTvSlice.reducer;

// Asynchronous thunk action
export function fetchBattleTv() {
  return async dispatch => {
    dispatch(getBattleTv());

    try {
      const response = await fetch(
        'https://stoplight.io/mocks/rinish-api-testbed/codecharacter/14036190/user/matches',
      );
      const data = await response.json();

      dispatch(getBattleTvSuccess(data));
    } catch (error) {
      dispatch(getBattleTvFailure());
    }
  };
}
