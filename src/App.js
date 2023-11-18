
import styles from './app.module.scss';
import {
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import LoadingScreen from "./Pages/LodadingScreen/LoadingScreen";
import Main from "./Pages/Main/Main";
import shopIcon from "./Img/shop.svg"
import userIcon from "./Img/user.svg"
import exitIcon from "./Img/exit.svg"
import Item from "./Pages/Item/Item";
import Sidebar from "./Components/Sidebar";
import Welcome from "./Pages/Welcome/Welcome";
import Creator from "./Pages/Creator/Creator";
import Cart from "./Pages/Cart/Cart";
import Support from "./Pages/Support/Support";

function App() {
  return (
      <>

              <Switch>

                  <Route path={"/loading"}>
                      <Sidebar/>
                      <LoadingScreen/>
                  </Route>

                  <Route path={"/welcome"}>
                      <Welcome/>
                  </Route>

                  <Route path={"/create"}>
                      <Creator/>
                  </Route>

                  <Route path={"/item"}>
                      <Sidebar/>
                      <Item/>
                  </Route>

                  <Route path={"/cart"}>
                      <Sidebar/>
                      <Cart/>
                  </Route>
                  <Route path={"/support"}>
                      <Support/>
                  </Route>

                  <Route path={"/"}>
                      <Sidebar/>
                      <Main/>
                  </Route>


              </Switch>
      </>

  );
}

export default App;
