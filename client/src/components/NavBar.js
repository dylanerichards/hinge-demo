import React, { Component } from 'react';
import axios from "axios"
import { Switch, Route, Link  } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

class NavBar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <Link to="/" className="home-nav"> Home</Link>
          </Typography>

        </Toolbar>
      </AppBar>
    )
  }
}

export default NavBar
