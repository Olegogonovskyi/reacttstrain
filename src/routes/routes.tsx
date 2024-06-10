import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import {postsUrls, usersUrls} from "../constants/Urls";
import UsersPage from "../Pages/UsersPage/UsersPage";
import PostsPage from "../Pages/PostsPage/PostsPage";

export const route = createBrowserRouter([
    {path: '/', element:<MainLayout/>, children: [
            {path: usersUrls.users, element: <UsersPage/>},
            {path: postsUrls.posts, element: <PostsPage/>}
        ]}
])