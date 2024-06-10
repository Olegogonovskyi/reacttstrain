import {IPostModel} from "../../Models/IPostModel";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {postsApiService} from "../../services/posts.api.service";
import {AxiosError} from "axios";

type postsSliceType = {
    posts: IPostModel[]
}

const initialState: postsSliceType = {
    posts: []
}

const loadPosts = createAsyncThunk(
    'postsSlice/loadPosts',
    async (arg, thunkAPI) => {
        try {
            const posts = await postsApiService.getAll()
            return thunkAPI.fulfillWithValue(posts)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPostModel[]>) => {
            state.posts = action.payload
        })
})

const {reducer: postsSliceReducer, actions} = postsSlice

const postsSliceActions = {
    ...actions,
    loadPosts
}

export {postsSliceActions, postsSliceReducer}