import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState } from './store';
import { Dispatch } from 'react';
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = <T>(): Dispatch<T> => useDispatch<Dispatch<T>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
