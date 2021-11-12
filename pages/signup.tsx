import React, { forwardRef, useState } from 'react';
import { signUp } from '../_api/firebase'

interface PropsType {
  value?: any;
  onClick?: any;
}

const SignUp = (props: any) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async () => {
    try {
        
      let some: any = await signUp(email, password);
      console.log(some);
    } catch (err) {
        
      console.log(err)
    }
  };

  return (
    <>
      <div className='container'>
        <div>
          <div className='row'>
            <h2>SignUp</h2>

            <div className='colSignUp'>
            <div className='hide-md-lg'>
                <p>Or sign in manually:</p>
              </div>

              <input
                type='text'
                name='username'
                placeholder='Username'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                name='password'
                placeholder='Password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <input type='submit' value='Sign Up' onClick={() => {handleSignUp()}} />
            </div>

            <div className='colSignUp'>
            </div>
          </div>
        </div>
      </div>

      <div className='bottom-container'>
        <div className='row'>
          <div className='colSignUp'>
            <a href='/' className='btn'>
             <p className="button-text">Login</p> 
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;