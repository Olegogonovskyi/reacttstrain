import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postsSliceActions} from "../../redux/slices/postsSlice";
import PostComponent from "../PostComponent";

const PostsComponent: FC = () => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.posts.posts)
    useEffect(() => {
        dispatch(postsSliceActions.loadPosts())
    }, []);
    return (
        <div>
            {
                posts.map(post => <PostComponent post={post} key={post.id}/>)
            }
        </div>
    );
};

export default PostsComponent;