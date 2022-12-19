import React, { useState, createContext} from 'react'
export const CartContext = createContext()

export default function CartProvider({children}) {

    const [cart, setCart] = useState([
        {
            count:1,
            color: "black",
            id:11
        },
        {
            count:1,
            color: "white",
            id:12
        },
        {
            count:1,
            color: "silver",
            id:13
        }
    ]);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}