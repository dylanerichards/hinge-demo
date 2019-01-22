import React, { Component } from 'react';
import axios from "axios"

class UserEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: { photos: [] },
      questions: []
    }
  }

  componentDidMount() {
    axios.get(`/users/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ user: response.data })
      })

    axios.get(`/questions/`)
      .then(response => {
        this.setState({ questions: response.data })
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

  onQuestionChange(e, questionNumber) {
    axios.put(`/users/${this.state.user.id}`, {
        user: { question: e.target.value, question_number: questionNumber }
    }).then((response) => {
      this.setState({ user: response.data })
    })
  }

  onAnswerChange(e, answerNumber) {
    axios.put(`/users/${this.state.user.id}`, {
        user: { answer: e.target.value, answer_number: answerNumber }
    }).then((response) => {
      this.setState({ user: response.data })
    })
  }

  render() {
    const images = this.state.user.photos.map((photo, index) => {

    const i = index

      return (
        <div key={index} className="user-images">
        <input key={Math.random()} id={`user-photo-${index}`} type="text" defaultValue={photo} onBlur={(e, index) => {this.onPhotoBlur(e.target.value, i)}} />
        <img src={photo} alt=""/>
        </div>
      )
    })

    axios.get(`/users/${this.props.match.params.id}`)
      .then(response => {
        return response.user
      })


      return (
        <div>
        <label htmlFor="user-first-name">First Name</label>
        <input id="user-first-name" type="text" defaultValue={this.state.user.first_name} onBlur={(e) => {this.onFirstNameBlur(e.target.value)}} />

        <label htmlFor="user-last-name">Last Name</label>
        <input id="user-last-name" type="text" defaultValue={this.state.user.last_name} onBlur={(e) => {this.onLastNameBlur(e.target.value)}} />


        <h2>
        {this.state.user.first_name} {this.state.user.last_name}
        </h2>

        <div>
          <h2>Change Questions</h2>

          <div className="question-select-and-answer">
            <h3>{ this.state.user.question_1 || "Question 1" }</h3>
            <select className="question-1-select" onChange={(e) => {this.onQuestionChange(e, 1)}}>
            {this.state.questions.map((question, i) => {
              return <option key={i} selected={this.state.user.question_1 === question.body }>{question.body}</option>
            })}
            </select>
            <input type="text" className="answer-1-input" defaultValue={this.state.user.answer_1} onBlur={(e) => this.onAnswerChange(e, 1)}/>
          </div>

          <div className="question-select-and-answer">
            <h3>{ this.state.user.question_2 || "Question 2" }</h3>
          <select className="question-2-select" onChange={(e) => {this.onQuestionChange(e, 2)}}>
          {this.state.questions.map((question, i) => {
            return <option key={i} selected={this.state.user.question_2 === question.body }>{question.body}</option>
          })}
          </select>
          <input type="text" className="answer-2-input" defaultValue={this.state.user.answer_2} onBlur={(e) => this.onAnswerChange(e, 2)}/>
          </div>

          <div className="question-select-and-answer">
          <h3>{ this.state.user.question_3 || "Question 3" }</h3>
          <select className="question-3-select" onChange={(e) => {this.onQuestionChange(e, 3)}}>
          {this.state.questions.map((question, i) => {
            return <option key={i} selected={this.state.user.question_3 === question.body }>{question.body}</option>
          })}
          </select>
          <input type="text" className="answer-3-input" defaultValue={this.state.user.answer_3} onBlur={(e) => this.onAnswerChange(e, 3)}/>
          </div>

        </div>

        <div>
        {images}
        </div>

        </div>
      )
  }
}

export default UserEdit
