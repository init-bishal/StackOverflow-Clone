import React from 'react'

const Avatar = ({children, backgroundColor, px,py , color,borderRadius ,fontSize ,cursor }) => {
  const sty={
    backgroundColor, 
    padding:`${py} ${px}` , 
    color:color || 'black', 
    borderRadius ,
    fontSize , 
    textAlign :"center",
    cursor:cursor || null, 
    textDecoration:"none"
  }
  return (
    <div style={sty}>
      {children}
    </div>
  )
}

export default Avatar
