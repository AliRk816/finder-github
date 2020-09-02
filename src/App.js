import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Datacenter from './components/DataCenter/Datacenter'
import Profiles from './components/Profiles'
import Navbar from './Navbar'
import Favourites from './components/Favourites'


const App = () => {
  return (
    <div>
      
      <Datacenter>
          <Router>
          <Navbar/>
            <Switch>
              <Route exact path='/' component={Profiles}/>
              <Route exact path='/Fav' component={Favourites} />
            </Switch>
          </Router>
          
      </Datacenter>
    </div>
  );
}

export default App;
