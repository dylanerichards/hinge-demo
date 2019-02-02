import React, { Component } from 'react';
import "../App.css"
import UserListCard from "./UserListCard"
import { connect } from "react-redux"
import { getUsers } from "../actions/usersActions"

class UserList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    console.log(this.props.users)
    return (
      <div>
        <h1>All Users</h1>

        {this.props.users.users && this.props.users.users.map((user) => {
          return (
            <UserListCard user={user} />
          )
        })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(getUsers())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)