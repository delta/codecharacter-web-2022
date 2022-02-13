import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface settingsStateType {
  isSettingsOpen: boolean;
  fontSize: number;
  theme: string;
  keyboardHandler: string;
  enableBasicAutoComplete: boolean;
  enableSnippets: boolean;
}

const initialState: settingsStateType = {
  isSettingsOpen: false,
  fontSize: 16,
  theme: 'monokai',
  keyboardHandler: 'default',
  enableBasicAutoComplete: true,
  enableSnippets: true,
};

export interface CodeAndLanguage {
  currentUserCode: string;
  currentUserLanguage: string;
}

export const settingsSlice = createSlice({
  name: 'settingsState',
  initialState,
  reducers: {
    isSettingsOpened: (state, action: PayloadAction<boolean>) => {
      state.isSettingsOpen = action.payload;
    },
    fontSizeChanged: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
    themeChanged: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    keyboardHandlerChanged: (state, action: PayloadAction<string>) => {
      state.keyboardHandler = action.payload;
    },
    enableBasicAutoCompleteChanged: (state, action: PayloadAction<boolean>) => {
      state.enableBasicAutoComplete = action.payload;
    },
    enableSnippetsChanged: (state, action: PayloadAction<boolean>) => {
      state.enableSnippets = action.payload;
    },
  },
});

export const {
  isSettingsOpened,
  fontSizeChanged,
  themeChanged,
  keyboardHandlerChanged,
  enableBasicAutoCompleteChanged,
  enableSnippetsChanged,
} = settingsSlice.actions;

export default settingsSlice.reducer;
