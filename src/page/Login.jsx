import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import loginImage from "../assets/others/authentication2.png";
import bgImage from "../assets/reservation/wood-grain-pattern-gray1x.png";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {googleSignIn} = useAuth();
  const axiosPublic = useAxiosPublic();
  

  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      navigate(from, {replace: true})
    });
  };
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }

    console.log(user_captcha_value);
  };
  const handleGoogleSignIn=()=>{
    googleSignIn()
    .then(res=>{
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then(res=>{
        console.log(res.data);
        navigate('/')
      })
    })
  }
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Login</title>
      </Helmet>
      <div
        className="flex h-screen items-center justify-center bg-gray-100"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex flex-col lg:flex-row bg-white shadow-2xl rounded-lg w-4/5 py-6 max-w-4xl"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left Section - Image */}
          <div className="md:w-1/2  flex items-center justify-center rounded-l-lg">
            <img
              src={loginImage}
              alt="Cafe Illustration"
              className="w-3/4  rounded-lg"
            />
          </div>

          {/* Right Section - Form */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">
              Login
            </h2>

            <form onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type here"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the text above"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              <input
                type="submit"
                value="Sign In"
                className="w-full btn bg-[#D1A054B3] text-white py-2 rounded-md hover:bg-yellow-600"
              />
            </form>

            {/* Create Account */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                New here?{" "}
                <Link
                  to="/register"
                  className="text-yellow-500 font-bold hover:underline"
                >
                  Create a New Account
                </Link>
                <a href="#" className="text-yellow-500 hover:underline"></a>
              </p>
            </div>

            {/* Social Sign-In */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">Or sign in with</p>
              <div className="flex justify-center mt-2 space-x-4">
                <button onClick={handleGoogleSignIn} className="p-2 rounded-full bg-gray-100 text-2xl hover:bg-gray-200">
                  <FaGoogle />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <i className="fab fa-google text-red-600"></i>
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <i className="fab fa-github text-gray-800"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
