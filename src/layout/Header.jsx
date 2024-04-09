import React from 'react'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <h1>this is a head for all the text</h1>
    <img src="../assets/farm.jpg" alt="imaage loading " />

    <Outlet />
    </div>
  )
}

export default Header