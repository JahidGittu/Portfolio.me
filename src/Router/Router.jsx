import {
    createBrowserRouter,
} from "react-router";


import React from 'react';
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: 'Error',
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {

            }
        ]
    },
]);

export default router;