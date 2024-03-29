import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const Login = () => {
const [loginError, setLoginError] = useState('')
const { signInWithGoogle } = useContext(AuthContext);
const provider = new GoogleAuthProvider();
const auth = getAuth();

const handleGoogleSignIn = () => {
  signInWithGoogle()
      .then(result => {
          console.log(result.user)

      })
      .catch(error => {
          console.error(error)
      })
}

const {signIn} =useContext(AuthContext);
const handleLogin =e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email =form.get('email');
    const password =form.get('password');
    console.log(email,password)

setLoginError('');
    if(password.length < 6 ){
      setLoginError('password should be at least 6 characters and a letter or longer');
      return 
    }
    
    signIn(email,password)
    .then(result =>{
      console.log(result.user)
      
    })
    .catch(error =>{
      console.error(error)
      setLoginError(error.message)
    })
}

    return (
        <div className=''>
           <p className='text-5xl text-center font-bold text-pink-600'>Please login </p>
           <form  onSubmit ={handleLogin}className='md:w-3/4 lg:w-1/2 mx-auto'>
           <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-pink-600">Login</button>
        </div>
      </div>
           </form>
        
           {
            loginError && <p className='text-red-600'>{loginError}</p>
           }
           <p className='text-center mt-5'>
            Do not have an account ? <Link  className='text-pink-600'to="/register">Register</Link>
           </p>
           <button className="bg-pink-500 p-3 rounded-lg justify-center">
              Google Login
            </button>

           

        </div>
    );
};

export default Login;