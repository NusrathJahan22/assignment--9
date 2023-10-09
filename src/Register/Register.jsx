import  { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
const [registerError , setRegisterError] =useState('')

  const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,email,password);

        setRegisterError('');
if(password.length < 6 ){
  setRegisterError('password should be at least 6 characters or longer');
  return 
}




        createUser(email,password)
        .then(result =>{
          console.log(result.user)

        })
        .catch(error =>{
        console.error(error)
        setRegisterError(error.message);
        })
    }

    

    return (
        <div>
           <p className='text-5xl text-center font-bold text-pink-600'>Please Register </p>
           <form  onSubmit={handleRegister} className='md:w-3/4 lg:w-1/2 mx-auto'>
           <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="Name" placeholder="Name" className="input input-bordered" required name="name" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required name="email" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required name="password" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-pink-600">Register</button>
        </div>
      
           </form>
           {
            registerError && <p className='text-red-600'>{registerError}</p>
           }
           <p className='text-center mt-5'>
            Already have an account ? <Link  className='text-pink-600'to="/login">Login</Link>
           </p>

           

        </div>
    );
};

export default Register;