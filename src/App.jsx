import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./layout/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import News from "./components/News";
import Language from "./components/contextprovider/Language";
import Login from "./components/Login1";
import Postnews from "./components/admin/Postnews";
import Registration from "./components/Registration";
import Logout from "./components/Logout";
import Notification from "./components/Notification";
import Gallery from "./components/Gallery";
import Postevent from "./components/admin/Postevent";
import Footer from "./layout/Footer";
import Lost from "./components/Lost";


const App = () => {
  return (
    <Language>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/About"} element={<About />}></Route>
          <Route path={"/Contact"} element={<Contact />}></Route>
          <Route path={"/Services"} element={<Services />}></Route>
          <Route path={"/news"} element={<News />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/postnews"} element={<Postnews />}></Route>
          <Route path={"/register"} element={<Registration />}></Route>
          <Route path={"/logout"} element={<Logout />}></Route>
          <Route path={"/notification"} element={<Notification />}></Route>
          <Route path={"/gallery"} element={<Gallery />}></Route>
          <Route path={"/postevent"} element={<Postevent />}></Route>
          <Route path="*" element={<Lost/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Language>
  );
};

export default App;
