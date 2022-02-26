import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getLogs } from './logAPI';

const initialState = {
  logs: '',
};

export const getLogAction = createAsyncThunk(
  'logs/getLogs',
  async (id: string) => {
    try {
      const logs = await getLogs(id);
      return logs;
    } catch (error) {
      throw error;
    }
  },
);

export const logSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getLogAction.fulfilled, (state, action) => {
      state.logs = action.payload;
    });
  },
});

export const logs = (state: RootState): string => state.logs.logs;
export default logSlice.reducer;
