import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postsSliceActions} from "../../redux/slices/postsSlice";
import PostComponent from "../PostComponent";

const PostsComponent: FC = () => {
    const dispatch = useAppDispatch()
    const {posts, isComplited} = useAppSelector(state => state.posts)
    useEffect(() => {
        dispatch(postsSliceActions.loadPosts())
    }, []);
    return (
        <div>
            {
                isComplited? posts.map(post => <PostComponent post={post} key={post.id}/>):
                    <h1>Я вантажусь, якщо ти дочитав осе повідомлення, то іди повішся з таким інтернетом</h1>
            }
        </div>
    );
};

export default PostsComponent;