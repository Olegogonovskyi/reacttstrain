import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {TokenObtainPair} from "../../models/IFormDataModel";
import {authService} from "../../services/Auth.service";
import {useNavigate} from "react-router-dom";

const AuthFormComponent:FC = () => {
    const navigate = useNavigate()
   const {register, handleSubmit} = useForm<TokenObtainPair>({defaultValues: {password: 'OlegOg007$', username: 'OlegOg'}})
   const satFormData = async (formData: TokenObtainPair) => {
       const authResponse = await authService.auth(formData)
       authResponse && navigate('/cars')
   }

    return (
        <div>
            <form onSubmit={handleSubmit(satFormData)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default AuthFormComponent;