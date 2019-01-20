import React, { Component } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"

class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: { photos: [] }
    }
  }

  componentDidMount() {
    const user = axios.get(`/users/${this.props.match.params.id}`)
    .then(response => {
      console.log(response);
      this.setState({ user: response.data })
    })
  }

  render() {
    const images = this.state.user.photos.map((photo) => {
      return <img src={photo} alt=""/>
    })

      return (
        <div>
          <h2>{this.state.user.first_name} {this.state.user.last_name} <Link to={`/users/${this.props.match.params.id}/edit`}>Edit User</Link></h2>

          <h3>About Me</h3>
          <h4>{this.state.user.question_1}</h4>
          <p>{this.state.user.answer_1}</p>

          <h4>{this.state.user.question_2}</h4>
          <p>{this.state.user.answer_2}</p>

          <h4>{this.state.user.question_3}</h4>
          <p>{this.state.user.answer_3}</p>


          <div className="user-images">
          {images}
          </div>

        </div>
      )
  }
}

export default UserProfile
