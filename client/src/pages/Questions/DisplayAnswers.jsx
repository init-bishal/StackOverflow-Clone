import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import './Questions.css'
const DisplayAnswers = ({i}) => {
  return (
    <div>
        {
            i.answer.map((ans)=>(
                <div className='display-ans1' key={ans.id}>
                    <p>{ans.answerBody}</p>
                    <div className="answerdate_log">
                         <div className="question-actions-user1">
                            <button type='button'>Share</button>
                            <button type='button'>Delete</button>
                          </div>
                    <div>
                        <div>answered {ans.answeredOn}</div>
                        <Link to={`/User/${i.userId}`} className='user-link1' style={{color:'#0086d8', textDecoration:'none'}} >
                          <Avatar backgroundColor='green' px='8px' py='8px' borderRadius="3px">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                        <div style={{paddingTop: '6px', paddingLeft:'6px'}}>
                            {i.userPosted}
                        </div>
                         </Link>
                         </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAnswers
