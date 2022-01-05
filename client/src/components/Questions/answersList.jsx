import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';
import axios from 'axios';
import moment from 'moment';

import IndividualQuestion from './individualQuestion.jsx';
import Answers from './answers.jsx';



const AnswersList = (props) => {
  const [page, setPage] = useState(1)
  const [numOfAnswers, setNumOfAnswers] = useState(2)

  const { question_id } = props.question
  const answers = props.answers
  const displayedAnswers = answers.slice(0, numOfAnswers)

  function increaseAnswers() {
    setNumOfAnswers(numOfAnswers === answers.length ? 2 : answers.length)
  }

  return (
    <div>
      <div style={{ marginTop: "10px" }}>
        {displayedAnswers.map((answer =>
          <Answers key={answer.answer_id} answer={answer} question_id={question_id} />
        ))}
      </div>
      <br />
      {answers.length > 2 && (
        <div>
          <strong style={{ display:"inline-block", cursor: "pointer", textAlign:"center", width:"100%"}} onClick={increaseAnswers}>
            {numOfAnswers === answers.length ? 'Hide' : 'Show More'} Answers</strong>
        </div>)}
      {answers.length === 0 &&
        <p style={{ color: "yellow", fontSize: "10px" }}>No answers for this question. Click <span style={{ color: "green" }}>Add Answer</span> button on the right!</p>}
    </div>
  )
}

export default AnswersList

/* Notes:::
  -need to make new answer render on submit
*/
