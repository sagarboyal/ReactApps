
const initialState = {
    post: [],
    loading: false,
    error: null
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POSTS_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_POSTS_SUCCESS":
            return {
                ...state,
                post: action.payload,
                loading: false,
                error: null
            };
        case "FETCH_POSTS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};