import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root.jsx';
import Home from './components/home/Home.jsx';
import ListedBooks from './components/listedBooks/ListedBooks.jsx';
import PagesRead from './components/pagesRead/PagesRead.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import BookDetails from './components/bookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listed-books",
        element:<ListedBooks></ListedBooks>
      },
      {
        path:"/pages-to-read",
        element:<PagesRead></PagesRead>
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json')
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
