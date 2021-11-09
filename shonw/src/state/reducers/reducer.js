import data from "../../data/data";
const reducer = (state = 0, action) => {
    const id = data.find((item) => item.id === action.payload);
    switch (action.type) {
        case "imID":
            //data.filter((item) => item.id !== id
            //data.find((item) => item.id === id
            if (id === action.payload) {
                // const im = data.filter((item) => item.id !== action.payload);
                return action.payload;
            } else {
                return action.payload;
            }

        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default:
            return state;
    }
};
export default reducer;