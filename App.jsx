import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Preloader from "./components/Preloader"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);


    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>

      {
        isLoading ? (<Preloader />) :
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/courses' element={<Courses />} />
              <Route path='/courses/dsa' element={<Courses />} />
              <Route path='/courses/dev' element={<Courses />} />
              <Route path='/courses/dsaAndDev' element={<Courses />} />
            </Routes>
          </div>
      }
    </Router>
  )
}

export default App