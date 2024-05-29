import {createBrowserRouter} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import CarsPage from "./Pages/CarsPage/CarsPage";
import MainLayout from "./Layouts/MainLayout";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                index: true, element: <LoginPage/>
            },
            {
                path: '/cars',
                element: <CarsPage/>
            }
        ]
    }
])