import { useState } from 'react'
import './styles/App.scss'
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import Recette from "./pages/recettes";
import Cuisine from "./pages/cuisine";
import CreationRecette from "./pages/creationRecette";




function App() {

  return (
    <Router>

    <>
    <Header />
      <div className="content">
          <Routes>
            <Route path="/" element={<Recette />} />
            <Route path="/cuisine" element={<Cuisine />} />
            <Route path="/creer" element={<CreationRecette />} />
          </Routes>
      </div>
    </>
    </Router>

  )
}

export default App
