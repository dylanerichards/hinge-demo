import React, { Component } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"
import "../App.css"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
// import MoreVertIcon from "@material-ui/core/MoreVertIcon"

class UserList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get("/users")
      .then(response => { this.setState({ users: response.data }) })

  }

  render() {

    return(
      <div>
      <h1>All Users</h1>


      { this.state.users.map((user) => {
        return (
          <Link to={`/users/${user.id}`} className="no-decoration">
            <div key={user.id}>
              <Card className="user-index-card">
              <CardHeader
              avatar={
                <Avatar>
                <img src={user.photos[0]} />
                </Avatar>

              }
              title={`${user.first_name} ${user.last_name}`}
              />
              </Card>
            </div>
          </Link>
        )
      })
      }
      </div>
    )
  }
}

export default UserList
