import { RendererUtils } from '@codecharacter-2022/renderer';
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
      setTimeout(() => {
        RendererUtils.loadLog(logs);
      }, 2000);
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
