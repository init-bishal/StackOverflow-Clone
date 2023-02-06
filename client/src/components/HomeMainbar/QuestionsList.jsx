import React from 'react'
import Questions from './Questions'
const QuestionsList = ({ques}) => {
  return (
    <div>
        {
        ques.map((ques)=> (
            <Questions ques={ques} key={ques}/>
        ))
        }
    </div>
  )
}

export default QuestionsList
