import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Root from '../Root/Root';
import Login from '../Authintication/Login';
import Register from '../Authintication/Register';

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
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/rejister',
                element: <Register></Register>
            }







        ]

    }

])

export default Routes;