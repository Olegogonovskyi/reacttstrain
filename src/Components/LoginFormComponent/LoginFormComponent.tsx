import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {IAuthUser} from "../../Models/IAuthUser";
import {authService} from "../../services/authService";

const LoginFormComponent: FC = () => {
    const {handleSubmit, register} = useForm<IAuthUser>()
const authUser = async (usersFormData: IAuthUser) => {
    await authService.authUser(usersFormData)
}
    return (
        <div>
            <form onSubmit={handleSubmit(authUser)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default LoginFormComponent;