import HomePage from "../pages/HomePage/Homepage";
import ContactPage from "../pages/ContactPage/ContactPage";
import AboutPage from "../pages/AboutPage/AboutPage";
// Product
import ProductsPage from "../pages/Products/ProductPages/ProductPages";

import NotFound from "../pages/NotFound/NotFound";

import PageLayout from "../components/layout/PageLayout/PageLayout";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "about", element: <AboutPage /> },
            {
                path: "Products",
                children: [
                    { index: true, element: <ProductsPage /> },
                ]
            }
        ]
    },
    { path: "*", element: <NotFound /> }
]);