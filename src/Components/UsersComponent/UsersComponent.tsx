import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {usersSliceActions} from "../../redux/slices/usersSlice";
import UserComponent from "../UserComponent";

const UsersComponent: FC = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.users.users)
    useEffect(() => {
        dispatch(usersSliceActions.loadUsers())
    }, []);

    return (
        <div>
            {users.map(user => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};

export default UsersComponent;