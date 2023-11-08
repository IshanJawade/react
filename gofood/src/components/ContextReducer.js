import React, { createContext, useReducer, useContext } from 'react';

const CartStarteContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) =>{
    switch(action.type){
        case "ADD":
            return [...state, {id:action.id, name:action.name, price: action.price, qyt: action.qyt, size: action.size, img: action.img }]
        default: 
             console.log("Error in reducer");
    }
}

export  const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStarteContext.Provider value={state}>
                {children}
            </CartStarteContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStarteContext)
export const useDispatchCart = () => useContext(CartDispatchContext)