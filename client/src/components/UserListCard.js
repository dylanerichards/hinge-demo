import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "../App.css"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import Avatar from "@material-ui/core/Avatar"

class UserListCard extends Component {
  render() {
    const { user } = this.props

    return (
      <Link to={`/users/${user.id}`} className="no-decoration inline-block">
        <div key={user.id}>
          <Card className="user-index-card">
          <CardHeader
          avatar={
            <Avatar>
            <img src={user.photos[0]} alt="" />
            </Avatar>

          }
          title={`${user.first_name} ${user.last_name}`}
          />
          </Card>
        </div>
      </Link>
    )
  }

}

export default UserListCard
