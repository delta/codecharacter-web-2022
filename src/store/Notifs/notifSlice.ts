import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Notification } from '@codecharacter-2022/client';
import { RootState } from '../store';
import { getNotifs, markNotifAsRead } from './notifAPI';

interface NotifState {
  notifs: Notification[];
}

const initialState: NotifState = {
  notifs: [],
};

export const getNotifAction = createAsyncThunk('notifs/getNotifs', async () => {
  try {
    const notifs = await getNotifs();
    return notifs;
  } catch (error) {
    throw error;
  }
});

export const markNotifAction = createAsyncThunk(
  'notifs/markAsRead',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await markNotifAsRead(id);
      return response;
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const notifSlice = createSlice({
  name: 'notifs',
  initialState,
  reducers: {
    addNewNotif: (state, action) => {
      state.notifs.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getNotifAction.pending, state => {
        state.notifs = [];
      })
      .addCase(getNotifAction.fulfilled, (state, action) => {
        state.notifs = action.payload;
      });
  },
});

export const { addNewNotif } = notifSlice.actions;
export const notifs = (state: RootState): Notification[] => state.notifs.notifs;
export default notifSlice.reducer;
