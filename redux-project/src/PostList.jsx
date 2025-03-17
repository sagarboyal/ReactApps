import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/actions/postAction";

const PostList = () => {
    const dispath = useDispatch();
    const {post, loading, error} = useSelector(state => state.post);

    useEffect(() => {
        dispath(fetchPosts());
    }, [dispath]);
    
    return (
        <div>
        <h1>Post List</h1>
        </div>
    );
}

export default PostList;