import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const Header:FC = () => {
    return (
        <div>
            <NavLink to={'/'}>Auth</NavLink>
            <br/>
            <NavLink to={'/cars'}>Cars</NavLink>
            <hr/>
        </div>
    );
};

export default Header;