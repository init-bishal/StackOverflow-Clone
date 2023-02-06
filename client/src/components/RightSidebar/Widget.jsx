import React from 'react'
import pen from '../../assets/pen.png'
import soficon from '../../assets/soficon.png'
import comment from '../../assets/comment.png'
import './RIghtSidebar.css' 
const Widget = () => {
  return (
    <div className='widget'> 
        <h4>The Overflow blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'> 
                <img src={pen} alt="" width="18px" />
                <p style={{display:"inline"}}>Overservability is key to the future of software(and your DevOps career)</p>
            </div>
            <div className='right-sidebar-div-2'> 
                <img src={pen} alt="" width="18px" />
                <p style={{display:"inline"}}>Podcast 374: How valuable is your screen name?</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'> 
                <img src={comment} alt="" width="18px" />
                <p style={{display:"inline"}}>Review queue workflows-Final release....</p>
            </div>
            <div className='right-sidebar-div-2'> 
                <img src={comment} alt="" width="18px" />
                <p style={{display:"inline"}}>Please welcome Valued Associates:#958-V2Blast#959 - SpencerG</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={soficon} alt="" width="18px" />
                <p style={{display:"inline"}}>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'> 
                <span>38 </span>
                <p style={{display:"inline"}}>Why was this spam flag declined, yet the question marked as spam?</p>
            </div>
            <div className='right-sidebar-div-2'> 
                <span>20 </span>
                <p style={{display:"inline"}}>What is the best course of action when a user has high enough rep to...</p>
            </div>
            <div className='right-sidebar-div-2'> 
                <span>38 </span>
                <p style={{display:"inline"}}>is a link to the 'How to ask' help page a useful comment?</p>
            </div>
            
        </div>
    </div>
  )
}

export default Widget
