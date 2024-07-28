import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideoList from './VideoList';
import WatchPage from './WatchPage';
import SearchResults from './SearchResults';
import Practice from './Practice';



const appRouter = createBrowserRouter([
      {
        path:"/",
        element:<App/>,
        errorElement:<h1>Error</h1>,
        children:[
          {
            index:true,
            element:<VideoList/>

          },
          {
            path:"watch",
            element:<WatchPage/>

          }
          ,
          {
            path:"search",
            element:<SearchResults/>

          }
          ,
          {
            path:"practice",
            element:<Practice/>

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
