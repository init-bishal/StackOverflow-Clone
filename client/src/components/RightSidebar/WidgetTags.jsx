import React from 'react'
import './RIghtSidebar.css'
const WidgetTags = () => {
const tags=['c','css','express','firbase','html','java','javascript','mern','mongodb','mysql','next.js','node.js','php','python','reactjs']
  return (
    <div className='widget-tags'>
        <h3>Watched tags</h3>
        <div className='widget-tags-div'>
            {
              tags.map((i)=>(
                <p key={i} >{i}</p>
              ))
            }
        </div>


    </div>
  )
}

export default WidgetTags
