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
    return (
      <div>
        <h1>All Users</h1>

        {this.props.users && this.props.users.map((user) => {
          return (
            <UserListCard user={user} key={user.id} />
          )
        })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUsers: () => {
      dispatch(getUsers())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)