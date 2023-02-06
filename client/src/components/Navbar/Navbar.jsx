import React from 'react'
import {Link} from 'react-router-dom'
import stackoverflow_img from '../../assets/stackoverflow_img.png'
import seach from '../../assets/seach.png'
import Avatar from '../../components/Avatar/Avatar'

import './Navbar.css'
const Navbar = () => {
    var user=null 

  return (
     <nav className='main-nav'>
          <div className='navbar'>
              <Link to='/' className='nav-item nav-logo'>
                <img src={stackoverflow_img} alt='stackoverflow' width="200"/>
              </Link>
              <Link to="/" className='nav-item nav-btn'>About</Link>
              <Link to="/" className='nav-item nav-btn'>Products</Link>
              <Link to="/" className='nav-item nav-btn'>For Teams</Link>
              <form >
                   <input type="text" placeholder='Search...'/>
                   <img src={seach} alt="seach" width="18" className='search-icon'/>                   
              </form>
              {user===null?
                  <Link to="/Auth" className='nav-item nav-links'>Log in</Link> // login
              :<>
                <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius="50%" color="white"><Link to="/User" style={{color:'white',  textDecoration:'none'}}>M</Link></Avatar>
                <button className='nav-item nav-links'>Log out</button>
              </>
              }
              
          </div>
     </nav> 
  )
}

export default Navbar
