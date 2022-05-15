import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';

async function asyncFunc() {
  console.log('async... func...');
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

const counter = createSlice({
  name: 'counter',
  initialState: {
    value: 3,
  },
  reducers: {
    incremented: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },

  // 处理异步请求结果的reducer
  extraReducers: (builder) => {
    console.log('builder....', builder);
  },
});

export const store = configureStore({
  reducer: counter.reducer,
});

export default counter.reducer;

export const testApi = createAsyncThunk(
  `incremented`,
  //发出一个请求，这里用的是axios
  async (params) => await asyncFunc()
);

console.log('store...subscribe', store);

// Can still subscribe to the store
store.subscribe(() => console.log('检测到状态更新', store.getState()));
store.subscribe(() => {
  console.log('asd');
});
export const { incremented, decremented } = counter.actions;

export const asyncAdd = (): any => {
  console.log('async...');

  return async (dispatch, getState) => {
    setTimeout(() => {
      dispatch(incremented());
    }, 3000);
  };
};
store.dispatch(incremented());

/* export async function asyncAdd() {
  setTimeout(() => {
    counter.actions.incremented();
  }, 3000);
} */

// Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented());
// {value: 1}
// store.dispatch(incremented());
// {value: 2}
// store.dispatch(decremented());
// {value: 1}
