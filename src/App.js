import Footer from './Footer';
import Header from './Header';
import Body from './Body';
import './index.css'
import { Provider, useDispatch, useSelector } from "react-redux";
import store from './utils/store';
import { changeVisibilityOfSideBar } from './utils/manualCacheSearchResultSlice';

function Block(){
  const dispatch = useDispatch()
const sidebarIsVisibile = useSelector(store=>store.searchResultsCache.sidebarVisibility)

return  sidebarIsVisibile&&<div onClick={()=>{
  dispatch(changeVisibilityOfSideBar(false))
}} id="block" className='bg-black/20 w-10/12 h-full z-10 absolute right-0'></div>
}


function App() {

  return (
    <div className="App *:font-[Poppins] *:font-medium relative">
      <Provider store={store}>
       <Block/>
        <Header />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
