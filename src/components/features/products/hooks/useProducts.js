import { getProducts } from "../productsApi";
import { useEffect, useState } from "react";

export function useProducts() {
    // provider the products array for rendering
    const [products, setProducts] = useState([]);
    // Loading flag will be set to false after products data is loaded into products state
    const [loading, setLoading] = useState(true);
    // Error state
    const [error, setError] = useState("");
    // Logoc for fetching products data and setting the state
    useEffect(
        () => {
            let active = true;

            // Effect logic
               // --
            // product fetching logic
            async function loadProducts() {
                // loading products could sometimes have Exceptions
                try {
                    setLoading(true);
                    setError("");

                    // trying to fetch products data
                    const data = await getProducts();

                    if (active) {
                        setProducts(data);
                    }
                }
                // if products loading failed 
                catch (err) {
                    if (active) {
                        setError(err.response?.data?.message || err.message || "Failed to load products");
                    }
                }
                finally {
                    if (active) {
                        // loading is complete, so turning to false
                        setLoading(false);
                    }
                }
            }
            // attempting product loading
            loadProducts();
            // cleanup code
            return () => {
                active = false;
            };
            // dependency array -> empty here
        }, []);
    return { products, loading, error };
}



