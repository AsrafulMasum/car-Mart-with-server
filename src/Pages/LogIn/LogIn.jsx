import { useContext, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const LogIn = () => {
  const [show, setShow] = useState(false);

  const location = useLocation()

  const navigate = useNavigate()

  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    e.currentTarget.reset();
    signIn(email, password)
      .then(() => {
        toast.success("Login Successful.");
        navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const googleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Log In Success.");
        navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const githubLogin = () => {
    githubSignIn()
      .then(() => {
        toast.success("Google Log In Success.");
        navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 my-10">
        <div className="flex items-center justify-center mt-6">
            <p className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
              Log In
            </p>
          </div>

        <form onSubmit={handleSignIn} className="mt-6">
          <div>
            <label className="block text-sm text-gray-800 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm text-gray-800 dark:text-gray-200">
                Password
              </label>
              <a
                href="#"
                className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
              >
                Forget Password?
              </a>
            </div>

            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
              <div
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 cursor-pointer text-gray-400 text-xl"
              >
                {show ? <BsEyeSlash></BsEyeSlash> : <BsEye></BsEye>}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <p
            href="#"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400"
          >
            or login with Social Media
          </p>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex justify-center items-center mt-6 -mx-2">
          <button
            onClick={googleLogin}
            type="button"
            className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>
          </button>

          <Link
            onClick={githubLogin}
            className="p-1 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200"
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M17,7.625C17,7.15,16.968,6.567,16.75,6c0,0-1.426,0.01-2.771,1.284C13.358,7.103,12.694,7,12,7	c-0.694,0-1.358,0.103-1.979,0.284C8.676,6.01,7.25,6,7.25,6C7.033,6.567,7,7.15,7,7.625c0,0.719,0.128,1.16,0.205,1.378	C6.452,9.839,6,10.874,6,12c0,2.186,1.655,3.531,4,4c-0.527,0.463-0.85,1.11-0.953,1.836C8.824,17.944,8.5,18,8.125,18	c-0.301,0-0.886-0.142-1.431-0.991C6.474,16.665,6,16,5.375,16C5.253,16,4.996,15.992,5,16.181c0.002,0.09,0.14,0.091,0.435,0.354	C5.682,16.756,5.912,17.118,6,17.5c0.145,0.627,0.726,1.875,2.125,1.875C8.625,19.375,9,19.25,9,19.25v2.291	C9.947,21.838,10.955,22,12,22s2.053-0.162,3-0.459V18.25c0-0.899-0.374-1.7-1-2.25c2.345-0.469,4-1.814,4-4	c0-1.106-0.436-2.125-1.166-2.953C16.897,8.852,17,8.4,17,7.625z" />
            </svg>
          </Link>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Don&#39;t have an account?{" "}
          <Link
            to={"/signUp"}
            className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
