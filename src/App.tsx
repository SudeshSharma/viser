import React from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Registration from './components/Registration'
import NavBar from './components/NavBar'
import './App.css'
import { Grid } from '@material-ui/core';
import Blog from './components/Blog'
import About from './components/About'
import Pricing from './components/Pricing'
import Learning from './components/Learning'
import Footer from './components/Footer'

//const divStyle = require('./Images/room.jpg')
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Grid>
          <Router>
            <div>
              <NavBar/>
              <Switch>
                <Route path="/Home" extact="true" component={Home} />
                <Route path="/Learning" component={Learning} />
                <Route path="/Blog" component={Blog} />
                <Route path="/About" component={About} />
                <Route path="/Pricing" component={Pricing} />
                <Route path="/Registration" component={Registration}/>
              </Switch>
            </div>
            <Footer/> 
          </Router>
        </Grid>
      </div>
    );
  }
}

export default App;


