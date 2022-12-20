import React, { useState, createContext} from 'react'
import { useEffect } from 'react';
export const CartContext = createContext()

export default function CartProvider({children}) {

    const [cartItems, setCartItems] = useState([
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

    useEffect(() => {
        setTotalCount(CartItems.reduce((totalCount, item) => totalCount + item.count), 0)
    }, [cartItems]);

    const addToCart = (newItem) => {
        setCartItems([...CartItems])

    }



    return (
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}