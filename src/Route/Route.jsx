import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../page/Home/Home/Home';
import Category from '../page/Home/Category/Category';
import NewsLayout from '../Layout/NewsLayout';
import News from '../page/News/News/News';
import LoginLayout from '../Layout/LoginLayout';
import Login from '../page/Login/Login/Login';
import Register from '../page/Login/Register/Register';
import PrivateRoute from './PrivateRoute';
import Terms from '../page/Shared/Terms/Terms';

const Route = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default Route;