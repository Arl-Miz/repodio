export const increase = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount,
        });
    };
};
export const decrease = (amount) => {
    return (dispatch) => {
        dispatch({ type: "withdraw", payload: amount });
    };
};