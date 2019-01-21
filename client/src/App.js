import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import { Switch, Route, Link  } from 'react-router-dom'
import UserProfile from "./components/UserProfile"
import UserList from "./components/UserList"
import UserEdit from "./components/UserEdit"
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
      <div>
      <CssBaseline />

      <NavBar />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Switch>
          <Route exact path="/" component={UserList} />

          <Route path='/users/:id/edit' component={UserEdit}/>
          <Route path='/users/:id/' component={UserProfile}/>
        </Switch>
      </div>
    );
  }
}

export default App;
