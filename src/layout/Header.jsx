import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';

import { LanguageContext } from '../components/contextprovider/Language';
const Header = () => { 
  const {contextData}=useContext(LanguageContext);
  const [language,setlanguage]=useState(contextData.Language);
  console.log(language);
  

  return (
    <div >
      <div className={'flex justify-evenly p-3 items-center   shadow-lg'}>
        <img src="./logo2.jpg" alt="image loading "  width={50} height={50}/>
        <Link to="/">{language=='English'?"Home":"ዋና ገጽ"}</Link>
        <Link to='./news'> {language=='English'?"News":"ሓዱሽ ሓበሬታ"}</Link>
        <Link to='./Services'>{language=='English'?"Services/Products":"እንህቦም ግልጋሎታት"}</Link>
        <Link to="/about">{language=='English'?"About Us":"ብዛዕባና"}</Link>
        <Link to="/contact">{language=='English'?"Contact Us":"ይርከቡና"}</Link>
        <Link to='./Shares'> {language=='English'?"Shares":"ሼር ይዓድጉ"}</Link>
        <Link to='./FAQ'> {language=='English'?"FAQ":"ተደጋገምቲ ሕቶታት"}</Link>
        <Link to="/login">{language=='English'?"Login":"ይእተዉ"}</Link>
       
        <select name="language"  className='text-green-900' onChange={(e)=>setlanguage(e.target.value)}>
        <option value="English" selected={language.language=="English"}>English</option>
          <option value="ትግሪኛ" selected={language.language=="ትግሪኛ"}>ትግሪኛ</option>
          
        </select>
      </div>
    </div>
  );
};

export default Header;
