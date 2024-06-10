import React, {FC} from 'react';
import {IPostModel} from "../Models/IPostModel";

const PostComponent: FC<{post: IPostModel}> = ({post}) => {
    const {id, body, title} = post
    return (
        <div>
            <h2>{id}: {title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default PostComponent;