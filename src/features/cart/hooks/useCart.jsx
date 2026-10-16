import { useContext } from "react";
import { CartContex } from "../../../context/CartContext";

export function useCart() {
    const context = useContext(CartContex);

    if (!context){
        throw new Error("UseCart must be used inside Cartprovider")
    }

    return context;
}