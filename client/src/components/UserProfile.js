import React, { Component } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"
import Icon from '@material-ui/core/Icon';
import UserProfileQuestionAnswer from './UserProfileQuestionAnswer';
import "../App.css"
import { connect } from "react-redux"
import { getUser } from "../actions/usersActions"

class UserProfile extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
      this.props.getUser(this.props.match.params.id)
  }

  render() {
      if (!this.props.user) {
          return null
      }

    const images = this.props.user.photos.map((photo) => {
      return <img key={Math.random()} src={photo} alt=""/>
    })

      return (
        <div>
          <h2 className="inline">{this.props.user.first_name} {this.props.user.last_name} </h2>

          <Link to={`/users/${this.props.match.params.id}/edit`}>
            <Icon className="settings-menu-gear">edit</Icon>
          </Link>

          <h3>About Me</h3>

          <UserProfileQuestionAnswer question={this.props.user.question_1} answer={this.props.user.answer_1} />
          <UserProfileQuestionAnswer question={this.props.user.question_2} answer={this.props.user.answer_2} />
          <UserProfileQuestionAnswer question={this.props.user.question_3} answer={this.props.user.answer_3} />

          <div className="user-images">
            {images}
          </div>

        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: (id) => {
      dispatch(getUser(ownProps.match.params.id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)