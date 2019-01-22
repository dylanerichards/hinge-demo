import React, { Component } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"
import Icon from '@material-ui/core/Icon';
import "../App.css"

class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: { photos: [] }
    }
  }

  componentDidMount() {
    axios.get(`/users/${this.props.match.params.id}`)
    .then(response => {
      this.setState({ user: response.data })
    })
  }

  render() {
    const images = this.state.user.photos.map((photo) => {
      return <img key={Math.random()} src={photo} alt=""/>
    })

      return (
        <div>
          <h2 className="inline">{this.state.user.first_name} {this.state.user.last_name} </h2>
          <Link to={`/users/${this.props.match.params.id}/edit`}>
            <Icon className="settings-menu-gear">edit</Icon>
          </Link>

          <h3>About Me</h3>
          <div className="user-profile-question-answer">
          <h4>{this.state.user.question_1}</h4>
          <p>{this.state.user.answer_1}</p>
          </div>

          <div className="user-profile-question-answer">
          <h4>{this.state.user.question_2}</h4>
          <p>{this.state.user.answer_2}</p>
          </div>

          <div className="user-profile-question-answer">
          <h4>{this.state.user.question_3}</h4>
          <p>{this.state.user.answer_3}</p>
          </div>


          <div className="user-images">
          {images}
          </div>

        </div>
      )
  }
}

export default UserProfile
