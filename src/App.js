import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/homepage/home';
import Gallery from './pages/gallery/gallery'
import Login from "./pages/login/login";
import { auth, createUserProfileDocument } from './firebase/firebase.utils'




class App  extends React.Component{
  constructor() {
    super();
    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return  (<div>


          <Router>
            <Header/>
            <Switch>
              <Route exact path ='/' component={Home}/>
              <Route path ='/gallery' component={Gallery}/>
              <Route path='/register' component={Login}/>
            </Switch>
          </Router>
        </div>



    )

  }

  // const [loading, setLoading] = useState(true)
  //
  //
  //
  // useEffect(() => {
  //   setInterval(() => {
  //
  //     setLoading( false)
  //   }, 1000)
  //
  // })
  // loading ? (<Spinner/>):
 

}


export default App;
