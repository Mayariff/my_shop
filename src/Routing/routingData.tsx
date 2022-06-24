import Layout from "./Layout/Layout";
import Catalog from "../Pages/02_Catalog/Catalog";
import Login from "../Pages/01_Login/Login";
import ProductCard from "../Pages/03_ProductCard/ProductCard";
import RequireAuth from "../HOC/RequireAuth";
import ShoppingCart from "../Pages/04_ShoppingCart/ShoppingCart";
import BrandPage from "../Pages/05_AboutBrand/AboutBrand";
import React from "react";

export enum ROUTE{
    LOGIN = 'login',
    CATALOG = 'catalog',
    SHOPPING_CART = 'shopping_cart',
    ABOUT_BRAND = 'about_brand'
}

type routingType= {
    path: string,
    element: React.ReactElement ,
    children?: Array < { path: string,
        element: React.ReactElement }>
}

export const routingData: Array<routingType>=[
    {
        path: '/',
        element: <Layout />,
        children: [{
            path: '/',
            element: <Catalog /> ,
        },
            {
                path: ROUTE.LOGIN,
                element: <Login />,
            },
            {
                path: ROUTE.CATALOG,
                element: < Catalog />,
            },
            {
                path: ROUTE.CATALOG+`/:itemID`,
                element: <ProductCard />,
            },
            {path: ROUTE.SHOPPING_CART,
                element: <RequireAuth><ShoppingCart/></RequireAuth>  },
            {
                path: ROUTE.ABOUT_BRAND,
                element: <BrandPage />,
            },
        ]
    },
]