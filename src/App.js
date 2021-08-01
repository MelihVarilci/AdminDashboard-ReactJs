import React, { useState } from 'react'
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import Sidebar from "./components/sidebar/Sidebar";
import UserList from "./pages/userList/UserList";
import Topbar from "./components/topbar/Topbar";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import styled from "styled-components";
import User from "./pages/user/User";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AccountBox } from "./components/accountBox";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: "", email: "" })

  const Login = details => {
    console.log(details)

    if (details.email === adminUser.email && details.password === adminUser.password) {
      setUser({
        name: details.name,
        email: details.email
      })
      toast.success("Logged in");
    } else {
      toast.error("Details do not match");
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" })
    toast.warn("Logout")
  }

  const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      {(user.email !== "") ?
        <Router>
          <Topbar Logout={Logout} />
          <div className="container">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/users" component={UserList} />
              <Route exact path="/user/:userId" component={User} />
              <Route exact path="/newUser" component={NewUser} />
              <Route exact path="/products" component={ProductList} />
              <Route exact path="/product/:productId" component={Product} />
              <Route exact path="/newProduct" component={NewProduct} />
            </Switch>
          </div>
        </Router>
        :
        <AppContainer >
          <AccountBox Login={Login} />
        </AppContainer>
      }
    </div>
  );
}

export default App;
