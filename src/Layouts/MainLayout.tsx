import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Pages/Header/Header";

const MainLayout: FC = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;