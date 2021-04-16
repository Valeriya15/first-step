import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NaviBar from './Components/Navibar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Home} from "./Home";
import {Users} from "./Users";
import {About} from "./About";


function App() {
  return (
    <>
    
      <Router>
        <NaviBar />
  <Switch>
    <Route exact path="/home" component={Home}/>
    <Route path="/users" component={Users}/>
    <Route path="/about" component={About}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
