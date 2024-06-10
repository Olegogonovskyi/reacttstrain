import {createSlice} from "@reduxjs/toolkit";


type initialStateType = {
    value: number
}

const initialState: initialStateType = {
    value: 0
}

const counterOneSlice = createSlice({
    name: 'counterOneSlice',
    initialState,
    reducers: {
        increment: (state)=> {state.value +=1},
        deccrement: (state)=> {state.value -=1},
        reset: (state)=> {state.value =0}
    }
})

const {reducer: counterOneSliceReducer, actions} = counterOneSlice

const counterOneSliceActions = {
    ...actions
}

export {counterOneSliceActions, counterOneSliceReducer}

