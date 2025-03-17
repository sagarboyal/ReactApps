import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/actions/postAction";

const PostList = () => {
    const dispath = useDispatch();
    const {post, loading, error} = useSelector(state => state.post);

    useEffect(() => {
        dispath(fetchPosts());
    }, [dispath]);
    
    if(loading) return <h2>Loading...</h2>
    if(error) return (
        <>
            <h2 style={{color: "red", fontSize: "40px"}}>Error 404</h2>
            <p style={{marginTop: "-30px"}}>{error}</p>
        </>
    )
    return (
        <div>
            <h1 style={{color: "whitesmoke"}}>Posts</h1>
            <ul>
                {post.map(post => (
                    <li key={post.id} 
                        style={{
                            border: "2px solid lightblue", padding: "10px",
                            margin: "5px",
                            borderRadius: "10px"}}>
                        <h3 
                            style={{
                                fontSize: "25px", 
                                color: "lightblue"}}>
                            {post.title}
                        </h3>
                        <p 
                            style={{
                                color: "cadetblue"}}>
                            {post.body}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;