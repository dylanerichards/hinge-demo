import React, { Component } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"

class QuestionDropdown extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props.user);
  }

  render() {
    return (
      "Hi"
    )
  }
}

export default QuestionDropdown
