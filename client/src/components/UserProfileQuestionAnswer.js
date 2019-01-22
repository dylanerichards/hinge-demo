import React, { Component } from 'react';
import "../App.css"

class UserProfileQuestionAnswer extends Component {
  render() {
    return (
      <div className="user-profile-question-answer">
        <h4>{this.props.question}</h4>
        <p>{this.props.answer}</p>
      </div>
    )
  }
}

export default UserProfileQuestionAnswer
