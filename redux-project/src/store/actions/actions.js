export const fetchPostsRequest = () => ({
    type: "FETCH_POSTS_REQUEST"
});

export const fetchPostsSuccess = (post) => ({
    type: "FETCH_POSTS_SUCCESS",
    payload: post
});

export const fetchPostsFailure = (error) => ({
    type: "FETCH_POSTS_FAILURE",
    payload: error
});