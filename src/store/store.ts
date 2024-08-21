import { configureStore, createAsyncThunk, createSelector, ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { baseApi } from "../shared/api";
import { router } from "../app/router";
import { useDispatch, useSelector, useStore } from "react-redux";
export const extraArgument = {
    router,
  };
  
export const store = configureStore({
    reducer:{
        [baseApi.reducerPath]:baseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: { extraArgument } }).concat(
          baseApi.middleware
        ),
    
})



  export type AppState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export type AppThunk<R = void> = ThunkAction<
    R,
    AppState,
    typeof extraArgument,
    UnknownAction
  >;
  
  export const useAppSelector = useSelector.withTypes<AppState>();
  export const useAppDispath = useDispatch.withTypes<AppDispatch>();
  export const useAppStore = useStore.withTypes<typeof store>();
  export const createAppSelector = createSelector.withTypes<AppState>();
  export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppState;
    dispatch: AppDispatch;
    extra: typeof extraArgument;
  }>();
  
  export type ExtraArgument = typeof extraArgument;