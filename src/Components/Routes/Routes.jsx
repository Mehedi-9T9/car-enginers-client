import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Root from '../Root/Root';

const Routes = new createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]

    }

])

export default Routes;