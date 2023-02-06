import React from 'react'
import './LeftSidebar.css' 
import {NavLink,useLocation} from 'react-router-dom'
import Globe from '../../assets/globe_icon.png'
const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
             <NavLink to='/' className="side-nav-links" activeClass='active' style={{paddingLeft:"10px"}}>
             <p>Home</p>
             </NavLink>
             <div className='side-nav-div'>
                 <div style={{paddingLeft:"10px"}}><p>PUBLIC</p></div>   
                  <NavLink to='/Questions' className="side-nav-links" activeClass='active' style={{paddingLeft:"10px"}} >
                    <img src={Globe} alt="Globe" style={{width:"18px"}} />
                    <p style={{paddingLeft:"10px",display:"inline"}} >Questions</p>
                  </NavLink>
                  <NavLink to="/Users" className='side-nav-links' activeClass='active' style={{paddingLeft:"40px"}}>
                       <p>Users</p>
                  </NavLink>
                  <NavLink to="/Tags" className='side-nav-links' activeClass='active' style={{paddingLeft:"40px"}}>
                       <p>Tags</p>
                  </NavLink>
             </div>
        </nav>
    </div>
    
  )
}

export default LeftSidebar
