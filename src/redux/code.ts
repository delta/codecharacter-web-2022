import { Code } from '@codecharacter-2022/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const languagesAvailable = ['c_cpp', 'python'];

export interface editorStateType {
  allLanguagesCode: string[];
  userCode: string;
  language: string;
  lastSavedAt: Date;
}

const initialState: editorStateType = {
  allLanguagesCode: [
    '//Welcome to Code Character 2022',
    '# Welcome to Code Character 2022',
  ],
  userCode: '//Welcome to Code Character 2022',
  language: 'c_cpp',
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
      state.lastSavedAt = action.payload.lastSavedAt;
      const desiredIndex = languagesAvailable.indexOf(state.language);
      state.allLanguagesCode[desiredIndex] = action.payload.code;
    },

    updateUserCode: (state, action: PayloadAction<CodeAndLanguage>) => {
      const tempCurrentUserLanguage = action.payload.currentUserLanguage;
      const desiredIndex = languagesAvailable.indexOf(tempCurrentUserLanguage);
      state.allLanguagesCode[desiredIndex] = action.payload.currentUserCode;
      console.log(state.allLanguagesCode[desiredIndex]);
      state.userCode = action.payload.currentUserCode;
    },

    changeLanguage: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      const tempCurrentUserLanguage = action.payload;
      const desiredIndex = languagesAvailable.indexOf(tempCurrentUserLanguage);
      state.userCode = state.allLanguagesCode[desiredIndex];
      state.language = action.payload;
    },
  },
});

export const { updateUserCode, changeLanguage, initializeEditorStates } =
  editorSlice.actions;
export default editorSlice.reducer;
