import { configureStore } from '@reduxjs/toolkit';
import team from './slices/team';

const store = configureStore({
  reducer: {
    team,
  },
});

export default store;
