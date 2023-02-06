import React from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import Questions from '../../pages/Questions/Questions'
import './HomeMainbar.css'
import QuestionsList from './QuestionsList'

const HomeMainbar = () =>{
  let questionsList=[{
    _id:'1',
    upVotes:3,
    downVotes:2, 
    noOfAnswers:2, 
    questionTitle:"What is a function?", 
    questionBody:"It meant to be",
    questionTags:['java','node js', 'react js','mongodb'],
    userPosted:'mano', 
    userId:'1', 
    askedOn:'jan 1',
    answer:[{
         answerBody:"Answer", 
         userAnswered:'kumar', 
         answeredOn:"jan 2", 
         userId:2
    }]
  },
    {_id:'2',
    upVotes:3,
    downVotes:2, 
    noOfAnswers:2, 
    questionTitle:"What is a function?", 
    questionBody:"It meant to be",
    questionTags:['java','node js', 'react js','mongodb'],
    userPosted:'mano', 
    userId:1, 
    askedOn:'jan 1',
    answer:[{
         answerBody:"Answer", 
         userAnswered:'kumar', 
         answeredOn:"jan 2", 
         userId:2
    }]
  },
    {_id:'3',
    upVotes:3,
    downVotes:2, 
    noOfAnswers:2, 
    questionTitle:"What is a function?", 
    questionBody:"It meant to be",
    questionTags:['java','node js', 'react js','mongodb'],
    userPosted:'mano', 
    userId:1, 
    askedOn:'jan 1',
    answer:[{
         answerBody:"Answer", 
         userAnswered:'kumar', 
         answeredOn:"jan 2", 
         userId:2
    }]
  }

]
  const location =useLocation() 
  const user=1
  const navigate=useNavigate()
  const redirect=()=>{
  alert("login or signup to ask a question")
    navigate('/Auth')
     }
  return (
   
    <div className='main-bar'>
           <div className='main-bar-header'>
                {
                  location.pathname==='/' ? <h1>Top Questions</h1>: <h1>All Questions</h1>
                }
                <Link to={ user===null ? redirect(): '/AskQuestion'} className='ask-btn'>Ask Question</Link>
           </div>
           <div>
              {
                questionsList===null?
                 <h1>Loading...</h1>:
                 <>
                     <p>{questionsList.length} Questions</p>
                     <QuestionsList ques={questionsList}/>
                    
                 </>

              }

           </div>
    </div>
  )
}

export default HomeMainbar
