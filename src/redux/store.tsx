import {configureStore} from "@reduxjs/toolkit";
import {counterOneSliceReducer} from "./slices/counterOneSlice";
import {useDispatch, useSelector} from "react-redux";

const store = configureStore({
    reducer: {
        counterOne: counterOneSliceReducer
    }
})

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch = useDispatch.withTypes<AppDispatch>()
const useAppSelector = useSelector.withTypes<RootState>();

export {useAppDispatch, useAppSelector, store}