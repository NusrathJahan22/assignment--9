import {  Link, NavLink } from "react-router-dom";
import Login from "../Login/Login";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

  const { user , logOut} = useContext(AuthContext);

  const handleSignOut = () =>{
logOut()
.then()
.ctch()
  }

    return (
        <div className="flex justify-between font-bold shadow-xl my-5 p-4 ">
          <p className="text-pink-500">Social Events </p>
          <nav className="flex gap-3">
            
            <ul className="gap-2 flex ">
              {/* nav 1 */}
              <li>
              <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-pink-300 underline" : ""
  }
>
  Home
</NavLink>
              </li>
              {/*  nav 2 */}
              <li>
              <NavLink
  to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-pink-300 underline" : ""
  }
>
  About Us
</NavLink>
              </li>
              
              {/* nav 3 */}
              <li>
              <NavLink
  to="/contact"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-pink-300 underline" : ""
  }
>
Contact 
</NavLink>
              </li>
              
             
              </ul>
              </nav>
              <div>
              {
              user ? <button onClick={handleSignOut} className='btn'>Sign Out</button>
              :
              <Link to="/login">
          <button className='bg-pink-400 btn p-2 rounded-lg font-bold'>Login</button>
          </Link>
            }
            
              </div>
              
        </div>
    );
};

export default Navbar;