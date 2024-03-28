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
import ReadList from './components/listedBooks/ReadList.jsx';
import WishListBooks from './components/listedBooks/WishListBooks.jsx';
import Recommendation from './components/recommendation/Recommendation.jsx';
import Challenges from './components/challenges/challenges.jsx';

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
        element:<ListedBooks></ListedBooks>,
        children:[
          {
            index: true,
            element: <ReadList></ReadList>,
            loader: ()=> fetch('../books.json')
          },
          {
            path:"wishList",
            element:<WishListBooks></WishListBooks>,
            loader: ()=> fetch('../books.json')
          }
        ]
      },
      {
        path:"/pages-to-read",
        element:<PagesRead></PagesRead>,
        loader: ()=> fetch('../books.json')
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json')
      },
      {
        path:"/recommendation",
        element:<Recommendation></Recommendation>,
        loader: () => fetch('../books.json')
      },
      {
        path:"/challenges",
        element:<Challenges></Challenges>
        
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
