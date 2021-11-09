import data from "../../data/data";
const reducer = (state = 0, action) => {
    const ID = data.find((item) => item.id === action.payload);
    switch (action.type) {
        case "imID":
            // console.log(action.type);
            const hatD = data.find((item) => item.id === action.payload.id);

            //data.filter((item) => item.id !== id
            // //data.find((item) => item.id === id
            if (hatD === action.payload.id) {
                //     // const im = data.filter((item) => item.id !== action.payload);
                return action.payload;
            } else {
                //     // throw new Exception();
                return action.payload;
                // return console.log(action.payload, "FU");
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