import { queries } from '@testing-library/react'
import React from 'react'
import {Link} from 'react-router-dom'
import './HomeMainbar.css'
const Questions = ({ques}) => {
  return (
    <div className='display-question-cointainer'>
        <div className='display-votes-ans'>
             <p>{ques.upVotes-ques.downVotes}</p>
             <p>votes</p>
        </div>
        <div className='display-votes-ans'>
             <p>{ques.noOfAnswers}</p>
             <p>answers</p>     
        </div>
        <div className='display-question-details'>
             <Link to={`/Question/${ques._id}`} className='question-title-link'>{ques.questionTitle}</Link>
              <div className="display-tags-time">
                   <div className='display-tags'>
                        {
                            ques.questionTags.map((i)=>(
                               <p key={i._id} >{i}</p>

                            ))
                        }    
                   </div>
                   <p className='display-time'>
                         asked {ques.askedOn} {ques.userPosted}
                   </p>
              </div>
        </div>
          
    </div>
  )
}

export default Questions
