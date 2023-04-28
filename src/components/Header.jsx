/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut= ()=>{
logOut()
.then(()=>{})
.catch(error => console.log(error))
  }
  return (
    <div>
      <div className="navbar bg-base-content text-neutral-content flex justify-between px-12">
        <div>
        <Link className="btn btn-ghost normal-case text-xl" to='/'>FireBase Auth</Link>
        </div>
        <div className="sm:flex sm:justify-between">
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
        {
          user && <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
        }
        <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
        {
          user ? <><span>{user.email}</span> <button onClick={handleLogOut} className="btn btn-xs ml-2 px-2">SignOut</button></>  : 
          <Link to='/login'>Login</Link>
        }
        </div>
      </div>
    </div>
  );
};

export default Header;
