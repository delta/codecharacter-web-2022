import { CHANGE_EDITOR_CODE, CHANGE_MAP } from '../types';

export const changedEditorCode = (
  changedCode: string,
): { type: string; payload: string } => {
  return {
    type: CHANGE_EDITOR_CODE,
    payload: changedCode,
  };
};

export const changedEditorMap = (
  changedMap: string,
): { type: string; payload: string } => {
  return {
    type: CHANGE_MAP,
    payload: changedMap,
  };
};
