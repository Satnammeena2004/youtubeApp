import Header from './Header';
import Body from './Body';
import './index.css'
import { Provider, useDispatch, useSelector } from "react-redux";
import store from './utils/store';
import { changeVisibilityOfSideBar } from './utils/manualCacheSearchResultSlice';
import { ErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';

function Block() {
  const dispatch = useDispatch()
  const sidebarIsVisibile = useSelector(store => store.searchResultsCache.sidebarVisibility)

  return sidebarIsVisibile && <div onClick={() => {
    dispatch(changeVisibilityOfSideBar(false))
  }} id="block" className='bg-black/20 w-10/12 h-full z-10 absolute right-0'></div>
}


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-600">
          Oops! Page not found.
        </h2>
        <p className="mt-2 text-gray-500">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
      
    </div>
  );
};

function App() {

  return (
    <div className="App *:font-[Poppins] *:font-medium relative">
      <Provider store={store}>
        <ErrorBoundary fallback={<ErrorPage />}>

          <Block />
          <Header />
          <Body />
        </ErrorBoundary>
      </Provider>
    </div>
  );
}

export default App;
