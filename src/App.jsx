import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './components/Home'
import Header from './layout/Header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
     <Route path="/" element={<Header />} >
        <Route path="index" element={<Home />} />
        
        </Route>
        

        
      </Routes>
      </BrowserRouter>


    </div> 
 )
}

export default App