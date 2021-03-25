import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Spinner from './components/spinner';
import Header from './components/Header';
import Home from './pages/homepage/home';
import Gallery from './pages/gallery/gallery'
import Footer from './components/Footer'



function App() {
  const [loading, setLoading] = useState(true)
  
  

  useEffect(() => {
    setInterval(() => {
    
      setLoading( false)
    }, 1000)
    
  })
 
  return loading ? (<Spinner/>): (<div>

    
    <Router>
    <Header/>
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route path ='/gallery' component={Gallery}/>
      </Switch>
      <Footer/>
    </Router>
  </div>

    
    
  )
}


export default App;
