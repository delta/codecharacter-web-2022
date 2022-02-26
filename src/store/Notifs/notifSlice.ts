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
  async (_arg, { rejectWithValue, getState }) => {
    try {
      const { notifs } = getState() as RootState;
      notifs.notifs.map(async notif => {
        if (notif.read === false) {
          try {
            await markNotifAsRead(notif.id);
          } catch (err) {
            rejectWithValue(err);
          }
        }
      });
      return;
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const addNotifToState = createAsyncThunk(
  'notifs/addNotifToState',
  async (notif: Notification) => {
    return notif;
  },
);

export const notifSlice = createSlice({
  name: 'notifs',
  initialState,
  reducers: {},
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
      .addCase(addNotifToState.fulfilled, (state, action) => {
        state.notifs.push(action.payload);
        state.unreadNotifs += 1;
      })
      .addCase(markNotifAction.fulfilled, state => {
        state.notifs.map(notif => {
          notif.read = true;
        });
        state.unreadNotifs = 0;
      });
  },
});

export const notifs = (state: RootState): Notification[] => state.notifs.notifs;
export const unreadNotifs = (state: RootState): number =>
  state.notifs.unreadNotifs;
export default notifSlice.reducer;
