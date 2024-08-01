import Footer from './Footer';
import Header from './Header';
import Body from './Body';
import './index.css'
import {Provider} from "react-redux";
import store from './utils/store';

function App() {
  return (
    <div className="App *:font-[Poppins] *:font-medium">
      <Provider store={store}>
     <Header/>
     <Body/>
     {/* <Footer/> */}
      </Provider>
    </div>
  );
}

export default App;
