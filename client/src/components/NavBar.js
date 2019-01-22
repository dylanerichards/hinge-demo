import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
