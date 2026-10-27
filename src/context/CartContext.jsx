import { createContext, useEffect, useMemo, useState } from "react";

// Initializaing the cartcontext using createcontext()
export const CartContext = createContext(null);

// Using browser local storage to the information,
// THis helps keep the cart data intact avan during reference
const STORAGE_KEY = "shopkart_cart";

function loadCart() {
    try {
        // Trying to retrieve the stored data, or return empty array
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        // Return empty array as cart as in ERror in getting local storage
        return [];
    }
}

export function CartProvider({ children }) {
    const [cartItems, setCartItem] = useState(loadCart);

    useEffect(() => {
        // whenever cartItem state is update ovrwrite the existing localstorage item for cart
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

    function addToCart(product) {
        setCartItem((currentItem) => {
            // Dealing with the case of item alredy in cart
            const existingItem = currentItem.find((item) => item.id == product.id);

            if (existingItem) {
                // increase quantiy of the iteam and update cart contex
                return currentItem.map((item) => item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            // In case the item was not in cart alredy, I'll return the existing arry of item added with the new item
            return [
                ...currentItem,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail || product.thumbnall,
                    quantity: 1
                }
            ];
        });

    }

    // Remove from Cart
    function removeFromCart(productId) {
        setCartItem((currentItem) => currentItem.filter((item) => item.id !== productId));
    }

    // Update Cart Quantiy
    function updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            removeFromCart(productId);
            return; // exiting the function
        }

        setCartItem((currentItems) => currentItems.map((item) => item.id === productId ? { ...item, quantity } : item));
    }

    // clear Cart
    function clearCart() {
        setCartItem([]);
    }

    // cartCount, cartTotal
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


    // Setup the value for contex, use useMemo
    const value = useMemo(   // useMemo is short for
        () => ({
            cartItems,
            cartCount,
            cartTotal,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
        }), [cartItems, cartCount, cartTotal]

    )

    // return the cartContext provider
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

}
