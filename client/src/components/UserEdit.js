import React, { Component } from 'react';
import axios from "axios"
import QuestionSelectAndAnswer from "./QuestionSelectAndAnswer"
import { ToastContainer, toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


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
      toast.success("First name successfully updated")
    })


  }

  onLastNameBlur(value) {
    axios.put(`/users/${this.state.user.id}`, {
        user: { last_name: value }
    }).then((response) => {
      this.setState({ user: response.data })
      toast.success("Last name successfully updated")
    })
  }

  onPhotoBlur(value, index) {
    axios.put(`/users/${this.state.user.id}`, {
        user: { photo_index: index, photo: value }
    }).then((response) => {
      this.setState({ user: response.data })
      toast.success("Photo successfully updated")
    })
  }

  onQuestionChange(e, questionNumber) {
    axios.put(`/users/${this.state.user.id}`, {
        user: { question: e.target.value, question_number: questionNumber }
    }).then((response) => {
      this.setState({ user: response.data })
      toast.success("Question successfully updated")
    })
  }

  onAnswerChange(e, answerNumber) {
    axios.put(`/users/${this.state.user.id}`, {
        user: { answer: e.target.value, answer_number: answerNumber }
    }).then((response) => {
      this.setState({ user: response.data })

      toast.success("Answer successfully updated")

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

      return (
        <div>
        <ToastContainer autoClose={3000} />
        <label htmlFor="user-first-name">First Name</label>
        <input id="user-first-name" type="text" defaultValue={this.state.user.first_name} onBlur={(e) => {this.onFirstNameBlur(e.target.value)}} />

        <label htmlFor="user-last-name">Last Name</label>
        <input id="user-last-name" type="text" defaultValue={this.state.user.last_name} onBlur={(e) => {this.onLastNameBlur(e.target.value)}} />

        <h2>
          {this.state.user.first_name} {this.state.user.last_name}
        </h2>

        <div>
          <h2>Change Questions</h2>

          <QuestionSelectAndAnswer
            question={this.state.user.question_1}
            answer={this.state.user.answer_1}
            questions={this.state.questions}
            placeholder={"Question 1"}
            onAnswerChange={(e) => this.onAnswerChange(e, 1)}
            onQuestionChange={(e) => this.onQuestionChange(e, 1)}
          />

          <QuestionSelectAndAnswer
            question={this.state.user.question_2}
            answer={this.state.user.answer_2}
            questions={this.state.questions}
            placeholder={"Question 2"}
            onQuestionChange={(e) => this.onQuestionChange(e, 2)}
            onAnswerChange={(e) => this.onAnswerChange(e, 2)}
          />

          <QuestionSelectAndAnswer
            question={this.state.user.question_3}
            answer={this.state.user.answer_3}
            questions={this.state.questions}
            placeholder={"Question 3"}
            onQuestionChange={(e) => this.onQuestionChange(e, 3)}
            onAnswerChange={(e) => this.onAnswerChange(e, 3)}
          />


        </div>

        <div>
        {images}
        </div>

        </div>
      )
  }
}

export default UserEdit
