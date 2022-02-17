import { Code } from '@codecharacter-2022/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const languagesAvailable = ['c_cpp', 'python', 'java'];

export interface editorStateType {
  allLanguagesCode: string[];
  userCode: string;
  language: string;
  lastSavedAt: Date;
}

const initialState: editorStateType = {
  allLanguagesCode: ['', '', ''],
  userCode: '',
  language: '',
  lastSavedAt: new Date(),
};

export interface CodeAndLanguage {
  currentUserCode: string;
  currentUserLanguage: string;
}

export const editorSlice = createSlice({
  name: 'editorState',
  initialState,
  reducers: {
    initializeEditorStates: (state, action: PayloadAction<Code>) => {
      state.userCode = action.payload.code;
      if (action.payload.language === 'C' || action.payload.language === 'CPP')
        state.language = 'c_cpp';
      else if (action.payload.language === 'PYTHON') state.language = 'python';
      else if (action.payload.language === 'JAVA') state.language = 'java';
      state.lastSavedAt = action.payload.lastSavedAt;
      const desiredIndex = languagesAvailable.indexOf(state.language);
      state.allLanguagesCode[desiredIndex] = action.payload.code;
    },

    updateUserCode: (state, action: PayloadAction<CodeAndLanguage>) => {
      const tempCurrentUserLanguage = action.payload.currentUserLanguage;
      const desiredIndex = languagesAvailable.indexOf(tempCurrentUserLanguage);
      state.allLanguagesCode[desiredIndex] = action.payload.currentUserCode;
      state.userCode = action.payload.currentUserCode;
    },

    changeLanguage: (state, action: PayloadAction<string>) => {
      const tempCurrentUserLanguage = action.payload;
      const desiredIndex = languagesAvailable.indexOf(tempCurrentUserLanguage);
      state.userCode = state.allLanguagesCode[desiredIndex];
      state.language = action.payload;
    },
  },
});

export const { updateUserCode, changeLanguage, initializeEditorStates } =
  editorSlice.actions;
export const UserCode = (state: RootState): string =>
  state.codeEditorReducer.editorState.userCode;
export const UserLanguage = (state: RootState): string =>
  state.codeEditorReducer.editorState.language;
export default editorSlice.reducer;
