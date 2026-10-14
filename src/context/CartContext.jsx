import { createContext, useContext, useEffect, useMemo, useState} from "react";

// Initializaing the cartcontext using createcontext()
const CartContext = createContext(null);

// Using browser local storage to the information,
// THis helps keep the cart data intact avan during reference
const STORAGE_KEY = "shopkart_cart";

function loadCart(){
    try{
        // Trying to retrieve the stored data, or return empty array
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch { 
        // Return empty array as cart as in ERror in getting local storage
        return[]; 
    }
}

export function Cartprovider({childern}){
    const [cartItem, setCartItem ] = useState(loadCart);

    useEffect(() => {
        // whenever cartItem state is update ovrwrite the existing localstorage item for cart
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItem))
    },[cartItem]);

    function addToCart(products){
        
    }

}
