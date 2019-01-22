import React, { Component } from 'react';

class QuestionSelectAndAnswer extends Component {
  render() {
    return (
      <div className="question-select-and-answer">
        <h3>{ this.props.question || this.props.placeholder }</h3>

        <select className="question-1-select" onChange={(e) => {this.props.onQuestionChange(e, 1)}}>
          {this.props.questions.map((question, i) => {
            return <option key={i} selected={this.props.question === question.body }>{question.body}</option>
          })}
        </select>

        <input type="text" className="answer-1-input" defaultValue={this.props.answer} onBlur={(e, questionNumber) => this.props.onAnswerChange(e, questionNumber)}/>
      </div>
    )
  }
}

export default QuestionSelectAndAnswer
