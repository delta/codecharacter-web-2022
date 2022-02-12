import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Notification } from '@codecharacter-2022/client';
import { RootState } from '../store';
import { getNotifs, markNotifAsRead } from './notifAPI';

interface NotifState {
  notifs: Notification[];
  unreadNotifs: number;
}

const initialState: NotifState = {
  notifs: [],
  unreadNotifs: 0,
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

export const getUnreadNotifsAction = createAsyncThunk(
  'notifs/getUnreadNotifs',
  async (_arg, { getState }) => {
    const { notifs } = getState() as RootState;
    let unreadNotifs = 0;
    for (let i = 0; i < notifs.notifs.length; i++) {
      unreadNotifs += 1;
    }
    return unreadNotifs;
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
        const unreadNotifs = state.notifs.filter(
          notif => notif.read === false,
        ).length;
        state.unreadNotifs = unreadNotifs;
      })
      .addCase(getUnreadNotifsAction.fulfilled, (state, action) => {
        state.unreadNotifs = action.payload;
      });
  },
});

export const { addNewNotif } = notifSlice.actions;
export const notifs = (state: RootState): Notification[] => state.notifs.notifs;
export const unreadNotifs = (state: RootState): number =>
  state.notifs.unreadNotifs;
export default notifSlice.reducer;
