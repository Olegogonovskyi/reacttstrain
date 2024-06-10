import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {postsUrls, usersUrls} from "../../constants/Urls";

const Header: FC = () => {
    return (
        <div>
            <NavLink to={'/'}>Main</NavLink>
            <br/>
            <NavLink to={usersUrls.users}>Users</NavLink>
            <br/>
            <NavLink to={postsUrls.posts}>Posts</NavLink>
            <hr/>
        </div>
    );
};

export default Header;