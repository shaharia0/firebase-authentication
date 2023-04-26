/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-content text-neutral-content flex justify-between px-12">
        <div>
        <Link className="btn btn-ghost normal-case text-xl" to='/'>FireBase Auth</Link>
        </div>
        <div className="sm:flex sm:justify-between">
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
