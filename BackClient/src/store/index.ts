import { configureStore } from '@reduxjs/toolkit';
import counter from './modules/couterStore';

export default configureStore({
  reducer: {
    counter,
  },
});
