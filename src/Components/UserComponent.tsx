import React, {FC} from 'react';
import {IUserModel} from "../Models/IUserModel";

const UserComponent: FC<{ user: IUserModel }> = ({user}) => {
    const {name, id, email} = user
    return (
        <div>
            <h1>{id}: {name} - {email}</h1>
        </div>
    );
};

export default UserComponent;