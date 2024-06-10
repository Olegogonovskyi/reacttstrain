import {IUserModel} from "../../Models/IUserModel";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {usersApiService} from "../../services/users.api.service";
import {AxiosError} from "axios";

type usersSliceType = {
    users: IUserModel[]
}

const initialState: usersSliceType = {
    users: []
}

const loadUsers = createAsyncThunk(
    'usersSlice/loadUsers',
    async (arg, thunkAPI) => {
        try {
            const users = await usersApiService.getAll()
            return thunkAPI.fulfillWithValue(users)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUserModel[]>) => {
            state.users = action.payload
        })

})

const {reducer: usersSliceReducer, actions} = usersSlice

const usersSliceActions = {
    ...actions,
    loadUsers
}

export  {usersSliceActions, usersSliceReducer}