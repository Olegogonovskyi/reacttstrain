import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {usersSliceReducer} from "./slices/usersSlice";
import {postsSliceReducer} from "./slices/postsSlice";

export const store = configureStore({
    reducer: {
        users: usersSliceReducer,
        posts: postsSliceReducer
    }
})

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
const useAppSelector = useSelector.withTypes<RootState>();

export {useAppDispatch, useAppSelector}