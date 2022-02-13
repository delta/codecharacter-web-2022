import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface historyEditorState {
  code: string;
  map: string;
}

const initialState: historyEditorState = {
  code: '',
  map: '',
};

export const historyEditorSlice = createSlice({
  name: 'historyEditor',
  initialState,
  reducers: {
    changeHistoryEditorCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    changeHistoryEditorMap: (state, action: PayloadAction<string>) => {
      state.map = action.payload;
    },
  },
});

export const { changeHistoryEditorCode, changeHistoryEditorMap } =
  historyEditorSlice.actions;

export default historyEditorSlice.reducer;
