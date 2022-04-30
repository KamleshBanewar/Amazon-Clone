import { createContext, useContext, useReducer } from "react";

//This Is a Context Api Decleration
export const StateContext = createContext();

//*** BUILD THE PROVIDER ***
//{reducer, initialState, children} IT IS ALL PROPS.
// initialState IT SAYING THAT HOW INITIALSTATE LOOK LIKES IN BEGINING.
// THIS "StateProvider" DECLERED IN A INDEX.JS
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* THIS CHILDREN REPRESENT THE WHOLE APP */}
        {children}
    </StateContext.Provider>
);

//THIS IS HOW WE USE IT INSIDE OF ALL OTHER COMPONENTS.
export const useStateValue = () => useContext(StateContext);

//LIKE THAT...
// const [{ basket }, dispatch] = useStateValue();