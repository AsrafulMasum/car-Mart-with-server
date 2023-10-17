import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import defaultUser from "./../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("SignOut Successful.");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {/* <li>
        <NavLink to={"/allEvents"}>Events</NavLink>
      </li> */}
      <li>
        <NavLink to={"/allServices"}>Services</NavLink>
      </li>
      {/* <li>
        <NavLink to={"/venues"}>Venues</NavLink>
      </li> */}
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      {/* <li>
        <NavLink to={"/teams"}>Teams</NavLink>
      </li>
      <li>
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li> */}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start w-2/3">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <p className="text-xl font-bold text-[#A68D5B]">carMart</p>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div className="flex justify-center items-center gap-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={user?.photoURL ? user.photoURL : defaultUser}
                      alt="User"
                    />
                  </div>
                </label>
              </div>
              <ul
                tabIndex={0}
                className="mt-2 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <p className="p-3">{user?.displayName && user.displayName}</p>

                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-sm btn-neutral normal-case"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
