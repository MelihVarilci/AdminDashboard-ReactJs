import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import "./App.css"
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";

function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/users">
              <UserList />
            </Route>
            <Route exact path="/user/:userId">
              <User />
            </Route>
            <Route exact path="/newUser">
              <NewUser />
            </Route>
            <Route exact path="/products">
              <ProductList />
            </Route>
            <Route exact path="/product/:productId">
              <Product />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
