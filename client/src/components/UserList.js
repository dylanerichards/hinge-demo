import React, { Component } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"

class UserList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    const users = axios.get("/users")
    .then(response => {
      this.setState({ users: response.data })
    })

  }

  render() {

    return(
      <div>
      <h1>All Users</h1>

      { this.state.users.map((user) => {
        return (
          <div key={user.id}>
          <Link to={`/users/${user.id}`}> {user.first_name} { user.last_name }</Link>
          </div>
        )
      })
      }
      </div>
    )
  }
}

export default UserList
