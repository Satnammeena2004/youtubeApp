import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideoList from './VideoList';
import WatchPage from './WatchPage';
import SearchResults from './SearchResults';
import Practice from './Practice';



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <VideoList />

      },
      {
        path: "watch",
        element: <WatchPage />

      }
      ,
      {
        path: "search",
        element: <SearchResults />

      }
      ,
      {
        path: "practice",
        element: <Practice />

      }

    ]

  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>

      <App />
    </RouterProvider>
  </React.StrictMode>
);


