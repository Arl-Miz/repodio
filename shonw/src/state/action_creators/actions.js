export const increase = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount,
        });
    };
};
export const cNum = (id) => {
    return (dispatch) => {
        dispatch({ type: "imID", payload: id });
    };
};
export const decrease = (amount) => {
    return (dispatch) => {
        dispatch({ type: "withdraw", payload: amount });
    };
};