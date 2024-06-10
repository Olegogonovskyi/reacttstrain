import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {counterOneSliceActions} from "../redux/slices/counterOneSlice";

const Components: FC = () => {
    const dispatch = useAppDispatch();
    const {value} = useAppSelector(state => state.counterOne);

    return (
        <div>
            <h1>Cont {value}</h1>
            <button onClick={() => dispatch(counterOneSliceActions.increment())}>increment</button>
            <button onClick={() => dispatch(counterOneSliceActions.deccrement())}>decrement</button>
            <button onClick={() => dispatch(counterOneSliceActions.reset())}>reset</button>

        </div>
    );
};

export default Components;