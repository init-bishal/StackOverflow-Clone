import React from 'react'
import {useParams } from 'react-router-dom' 
import upvote from '../../assets/upvote.png'
import downvote from '../../assets/downvote.png'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswers from './DisplayAnswers'
const QuestionDetails = () => {
    const {id} =useParams()
   
  
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
  return (
    
    <div className='question-details-page'>

       {
       
        questionsList===null?
         <h1>Loading...</h1>:
         <>
             {
                questionsList.filter((ques)=>(
                        ques._id === id
                )).map((i)=>(
                <div key={i._id}>
                {console.log(id)}
                    <section className='question-details-container' style={{marginTop:'70px' }}>
                        <h1>{i.questionTitle}</h1>
                        <div className='question-details-container-2'>
                             <div className="question-votes">
                                 <img src={upvote} alt="upvote" width='18' className='votes-icon' />
                                 <p>{i.upVotes - i.downVotes}</p>
                                 <img src={downvote} alt="downvote" width='18' className='votes-icon'/>
                             </div>
                             <div style={{width:"100%"}}>
                                  <p className='question-body'>{i.questionBody}</p>
                                  <div className="question-details-tags">
                                      {
                                        i.questionTags.map((tag)=>(
                                          <p key={tag}> {tag}</p>
                                        ))
                                      }
                                  </div>
                                  <div className="question-actions-user">
                                       <div>
                                            <button type='button' >Share</button>
                                             <button type='button'>Delete</button>
                                       </div>
                                       <div className='user-link-container'>
                                            <p>asked {i.askedOn}</p> 
                                            <Link to={`/User/${i.userId}`} className='user-link'
                                            style={{color:'#0086d8', textDecoration:'none'}} >
                                              <Avatar backgroundColor='orange' borderRadius='3px' px='8px' py='8px'
                                              className='votes-icon' >{i.userPosted.charAt(0).toUpperCase()}</Avatar>
                                               <div>
                                                  {i.userPosted}
                                               </div>
                                            </Link>
                                       </div>
                                  </div>
                             </div>
                        </div>
                    </section>
                    <hr />
                    {
                      i.noOfAnswers !==0 && (
                        <section >
                             <h3>{i.noOfAnswers} answers</h3>
                             <DisplayAnswers key={i._id} i={i}/>
                        </section>
                      )
                    }
                    <hr style={{marginTop:'30px'}}/>
                    <section className='post-ans-container'>
                        <h3 >Your Answer</h3>
                        <form >
                             <textarea name="" id="" cols="30" rows="10"></textarea><br />
                             <input type="submit" className='post-ans-btn' value='Post your answer' />
                        </form>
                        <p>
                          Browse other Question tagged {i.questionTags.map((tag)=>(
                               <Link to='/Tags' key={tag} className='ans-tags' style={{textDecoration:'none'}}> {tag}</Link>
                          ))} or <Link to='/AskQuestion' style={{textDecoration:'none', color:'#009dff'}}>ask your own question.</Link>
                        </p>

                    </section>
                    
                </div>



                ))
             }

         </>
       }
    </div>
  )
}

export default QuestionDetails
