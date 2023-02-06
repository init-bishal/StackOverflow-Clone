import React from 'react'
import './Auth.css'
import { useState } from 'react'
import icon from '../../assets/icon.png'
import AboutAuth  from './AboutAuth'
const Auth = () => {
    const[isSigup,setIsSignup]=useState(false)
    const handleSwitch=()=>{
        setIsSignup(!isSigup)

    }
    return (
    <section className='auth-section'>
        {isSigup && <AboutAuth/>}
        <div className='auth-container-2'>
        <img src={icon} alt='stack overflow' className='login-logo'/> 
            <form>
            
                {isSigup && (
                    <label htmlFor='name'>
                        <h4>Display Name</h4>
                        <input type="text" id='name' name='name' />
                    </label>) 
                }
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input type="email" name='name' id='email' placeholder='@gmail.com' />  
                </label>
                <label htmlFor="password">
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h4>Password</h4>
                    {/* if isSignup is true then forgot  password will be displayed */}
                    { !isSigup && <p style={{color:"#007ac6", fontSize:"13px"}} >forgot password?</p>}
                    </div>
                    <input type="password" name='password' id='password' /> 
                    {isSigup && <p style={{color:"black", fontSize:"13px"}}>
                        Passwords must contain atleast eight<br/>
                        characters with atleast<br/> 
                        1 letter and 1 digit
                    </p>} 
                </label>
                   {
                    isSigup && (
                        <label htmlFor='check'>
                           <input type="checkbox" id='check' name='check' /><p style={{color:"black", fontSize:"13px"}}>Opt-in to receive 
                           occasional<br/> product updates, user reasearch invitations,<br /> company announcemensts, andn digests </p>
                        </label>
                    )
                   }
                <label htmlFor="">
                    <button type='submit' className='auth-btn'>{isSigup?'Sign up':'Login'}</button>
                </label>
                {isSigup && (
                    <p style={{color:"#666767", fontSize:"13px"}}>
                        By clicking "Sign up", you agree to out  
                        <span style={{color:"blue", fontSize:"13px"}}> terms of service, privacy policy</span> and <span style={{color:"blue", fontSize:"13px"}}>cookie policy</span>
                    </p>
                )
                }
                
            </form>
            <p>
                {isSigup ? 'Already have an account?' :  'Don\'t have an account?'}
                <button type="button" className='handle-switch-btn' onClick={handleSwitch}>
                    {isSigup ? 'Log in' : 'Sign up'}
                </button>
            </p>
        </div>
    </section>
    ) 
}

export default Auth
