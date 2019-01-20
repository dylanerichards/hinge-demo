import React, { Component } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"

class UserEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: { photos: [] }
    }
  }

  componentDidMount() {
    const user = axios.get(`/users/${this.props.match.params.id}`)
    .then(response => {
      this.setState({ user: response.data })
    })
  }

  onFirstNameBlur(value) {
    axios.put(`/users/${this.state.user.id}`, {
        user: { first_name: value }
    }).then((response) => {
      this.setState({ user: response.data })
    })
  }

  onLastNameBlur(value) {
    axios.put(`/users/${this.state.user.id}`, {
        user: { last_name: value }
    }).then((response) => {
      this.setState({ user: response.data })
    })
  }

  onPhotoBlur(value, index) {
    axios.put(`/users/${this.state.user.id}`, {
        user: { photo_index: index, photo: value }
    }).then((response) => {
      this.setState({ user: response.data })
    })
  }

  render() {
    const images = this.state.user.photos.map((photo, index) => {
      const i = index

      return (
        <div>
        <input id={`user-photo-${index}`} type="text" defaultValue={photo} onBlur={(e, index) => {this.onPhotoBlur(e.target.value, i)}} />
        <img src={photo} alt=""/>
        </div>
      )
    })

      return (
        <div>
        <label for="user-first-name">First Name</label>
        <input id="user-first-name" type="text" defaultValue={this.state.user.first_name} onBlur={(e) => {this.onFirstNameBlur(e.target.value)}} />

        <label for="user-last-name">Last Name</label>
        <input id="user-last-name" type="text" defaultValue={this.state.user.last_name} onBlur={(e) => {this.onLastNameBlur(e.target.value)}} />


        <h2>
        {this.state.user.first_name} {this.state.user.last_name}
        </h2>

        <div>
        {images}
        </div>

        </div>
      )
  }
}

export default UserEdit
