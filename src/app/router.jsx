import HomePage from "../pages/HomePage/HomePage";

import ContactPage from "../pages/ContactPage/ContactPage";
import AboutPage from "../pages/AboutPage/AboutPage";
// Product
import ProductPage from "../pages/Products/ProductPage/ProductPage";

import NotFound from "../pages/NotFound/NotFound";

import PageLayout from "../components/layout/PageLayout/PageLayout";

import { createBrowserRouter } from "react-router-dom";
import ProductDetailsPage from "../pages/Products/ProductDetailsPages/ProductDetailsPages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "about", element: <AboutPage /> },
            {
                path: "products",
                children: [
                    { index: true, element: <ProductPage /> },
                    { path: ":productId", element: <ProductDetailsPage /> }
                ]
            }
        ]
    },
    { path: "*", element: <NotFound /> }
]);