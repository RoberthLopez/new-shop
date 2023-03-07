import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Layout from "./containers/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CreateAccount from "./pages/CreateAccount";
import PasswordRecovery from "./pages/PasswordRecovery";
import SendEmail from "./pages/SendEmail";
import NewPassword from "./pages/NewPassword";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";
import useInitialState from "./hooks/useInitialState";
import AppContext from "./context/AppContext";
import { HashRouter } from "react-router-dom";

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/password-recovery"
              element={<PasswordRecovery />}
            />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/my-account" element={<MyAccount />} />
            <Route exact path="/register" element={<CreateAccount />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
