import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipes from './Recipes'
import {Route, Routes} from 'react-router-dom'


const Pages = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine/>} />
        <Route path="/searched/:search" element={<Searched/>} />
        <Route path="/recipes/:name" element={<Recipes/>} />
      </Routes> 
  )
}

export default Pages