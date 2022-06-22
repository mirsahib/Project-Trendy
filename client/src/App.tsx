import React, { useEffect } from "react";
import "./App.css";

//component
import Header from "./components/Header/Header";
//router
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//container
import Home from "./container/Home/Home";
import Login from "./container/Login/Login";
import SignUp from './container/SignUp/SignUp'
import Footer from "./container/Footer/Footer";
import UploadImage from "./container/UploadImage/UploadImage";
import Checkout from "./container/Checkout/Checkout";


function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/uploadImage" element={<UploadImage/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;