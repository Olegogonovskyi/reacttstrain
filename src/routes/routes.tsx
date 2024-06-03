import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AuthPage from "../pages/AuthPage/AuthPage";
import CarsPage from "../pages/CarsPage/CarsPage";

export const route = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children: [
            {
                index: true,
                element: <AuthPage/>
            },
            {
                path: '/cars',
                element: <CarsPage/>
            }
        ]}
])