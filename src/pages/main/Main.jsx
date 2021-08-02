import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import ProductList from "../productList/ProductList";
import Transaction from "../transaction/Transaction";
import Topbar from "../../components/topbar/Topbar";
import NewProduct from "../newProduct/NewProduct";
import UserList from "../userList/UserList";
import NewUser from "../newUser/NewUser";
import Product from "../product/Product";
import styled from "styled-components";
import User from "../user/User";
import Home from "../home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AccountBox } from "../../components/accountBox";
import { ToastContainer, toast } from "react-toastify";
import { adminData } from "../../dummyData";

import "./Main.css";

export default function Main() {
  const [user, setUser] = useState({ name: "", email: "" });

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminData.email &&
      details.password === adminData.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
      });
      toast.success("Logged in");
    } else {
      toast.error("Details do not match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
    toast.warn("Logout");
  };

  const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  return (
    <div className="main">
      <ToastContainer position="bottom-right" />
      {user.email !== "" ? (
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
              <Route exact path="/transactions" component={Transaction} />
            </Switch>
          </div>
        </Router>
      ) : (
        <AppContainer>
          <AccountBox Login={Login} />
        </AppContainer>
      )}
    </div>
  );
}
