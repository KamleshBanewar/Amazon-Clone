//HEAR ALL LOGIC ARE DECLER.

export const initialState = {
    basket: [
        //THIS IS A EMPTY ARRAY WHEN USER WILL ADD ITEM THEN THOSE ITEM SHULD SAVE HEAR.
    ],
    user: ["Guest"],
};

//CALCULATER
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const Reducer = (state, action) => {
    // console.log(action.payload);
    switch (action.type) {

        case "SET_USER":
            return {
                user: [action.payload]
            };

        case "ADD_TO_BASKET":
            //LOGIC FOE ADD TO BASKET.
            return {
                ...state,
                basket: [...state.basket, action.payload]
            };
            break;
        case "REMOVE_TO_BASKET":
            //LOGIC FOE REMOVE TO BASKET.

            //HEAR WE CLONED THE BASKET
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                //ITEM EXISTS IN BASKET REMOVE IT...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `cant remove Product (id: ${action.id}) as its not an Basket.`
                )
            }


            return { ...state, basket: newBasket };
            break;

        default:
            return state;
    }
}

export default Reducer; 