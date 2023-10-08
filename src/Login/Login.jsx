import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
const {signIn} =useContext(AuthContext);
const handleLogin =e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email =form.get('email');
    const password =form.get('password');
    
    console.log(email,password)
    signIn(email,password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.error(error)
    })
}

    return (
        <div className=''>
           <p className='text-5xl text-center font-bold text-pink-600'>Please login </p>
           <form  onSubmit ={handleLogin}className='md:w-3/4 lg:w-1/2 mx-auto'>
           <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-pink-600">Login</button>
        </div>
      </form>
           </form>
           <p className='text-center mt-5'>
            Do not have an account ? <Link  className='text-pink-600'to="/register">Register</Link>
           </p>

           

        </div>
    );
};

export default Login;