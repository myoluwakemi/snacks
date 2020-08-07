import React, { useEffect, useState } from 'react';
import Spinner from './components/spinner';
import Header from './components/Header';
import About from './components/About'
import Gallery from './components/Gallery';
import Footer from './components/Footer'




function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setInterval(() => {
    
      setLoading( false)
    }, 1000)
  })
 
  return loading ? (<Spinner/>): (<div>

    <Header/>
    <About/>
    <Gallery/>
    <Footer/>
    
  </div>

    
    
  )
}


export default App;
