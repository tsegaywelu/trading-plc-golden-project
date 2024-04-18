import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { LanguageContext } from "../components/contextprovider/Language";
const Header = () => {
  const { contextData, setcontextData } = useContext(LanguageContext);

  console.log(contextData.Language);

  return (
    <div>
      <div className={"flex justify-evenly p-3 items-center   shadow-lg"}>
        <img src="./logo2.jpg" alt="image loading " width={50} height={50} />
        <Link to="/">
          {contextData.Language == "English" ? "Home" : "ዋና ገጽ"}
        </Link>
        <Link to="./Services">
          {contextData.Language == "English"
            ? "Services/Products"
            : "እንህቦም ግልጋሎታት"}
        </Link>
        <Link to="./news">
          {" "}
          {contextData.Language == "English" ? "News" : "ሓዱሽ ሓበሬታ"}
        </Link>
        <Link to="/about">
          {contextData.Language == "English" ? "About Us" : "ብዛዕባና"}
        </Link>
        <Link to="/postnews">
          {contextData.Language == "English" ? "Post News" : "አድራሻ አድራሻ"}
        </Link>

        <Link to="/contact">
          {contextData.Language == "English" ? "Contact Us" : "ይርከቡና"}
        </Link>
        <Link to="/login">
          {contextData.Language == "English" ? "Login" : "ይእተዉ"}
        </Link>

        <select
          name="contextData.Language"
          className="text-green-900"
          value={contextData.Language}
          onChange={(e) =>
            setcontextData((d) => ({
              ...d,
              Language: e.target.value,
            }))
          }
        >
          <option value="English" selected={contextData.Language == "English"}>
            English
          </option>
          <option value="ትግሪኛ" selected={contextData.Language == "ትግሪኛ"}>
            ትግሪኛ
          </option>
        </select>
      </div>
    </div>
  );
};

export default Header;
