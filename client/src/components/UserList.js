import React, { Component } from 'react';
import axios from "axios"
import "../App.css"
import UserListCard from "./UserListCard"

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
          <UserListCard user={user} />
        )
      })
      }
      </div>
    )
  }
}

export default UserList
