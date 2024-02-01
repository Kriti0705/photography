const initialState = {
    user: null,
}

const reducer = (state = initialState, action) => {
    if (action.type === "LOGIN") {
        return {
            ...state, user: state.user
        }
    }
}