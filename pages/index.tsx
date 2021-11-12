import React, { forwardRef, useState } from 'react';
import { signIn } from '../_api/firebase'
import { useRouter } from 'next/router'

interface PropsType {
  value?: any;
  onClick?: any;
}

const Homepage = (props: any) => {

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {

      const some: any = await signIn(email, password);
      if (!some.error) {
        router.push('/home')
        localStorage.setItem("accessToken", some?.user?.accessToken);
      } 
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
            <h2>Login with Social Media or Manually</h2>
            <div className='vl'>
              <span className='vl-innertext'>or</span>
            </div>

            <div className='col'>
              <a href='#' className='fb btn'>
                <i className='fa fa-facebook fa-fw'></i> Login with Facebook
              </a>
              <a href='#' className='twitter btn'>
                <i className='fa fa-twitter fa-fw'></i> Login with Twitter
              </a>
              <a href='#' className='google btn'>
                <i className='fa fa-google fa-fw'></i> Login with Google+
              </a>
            </div>

            <div className='col'>
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
              <input type='submit' value='Login' onClick={() => {handleLogin()}} />
            </div>
          </div>
        </div>
      </div>

      <div className='bottom-container'>
        <div className='row'>
          <div className='col'>
            <a href='/signup' className='btn'>
             <p className="button-text">Sign up</p> 
            </a>
          </div>
          <div className='col'>
            <a href='#' className='btn'>
			<p className="button-text">Forgot password?</p>  
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;