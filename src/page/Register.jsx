import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/others/authentication2.png";
import bgImage from "../assets/reservation/wood-grain-pattern-gray1x.png";

import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log();
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((err) => console.log(err));
    });
  };
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign Up</title>
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
          {/* Left Section - Form */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">
              Sign Up
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Enter your name"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              {/* Photo Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Photo URL
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Type here"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                  })}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 character
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password must be less then 20 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must have at least one uppercase letter, one
                    lowercase letter, one number and one special character
                  </span>
                )}
              </div>

              <input
                type="submit"
                value="Sign Up"
                className="w-full btn bg-[#D1A054B3]  text-white py-2 rounded-md hover:bg-yellow-600"
              />
            </form>

            {/* Create Account */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already registered?{" "}
                <Link
                  to="/login"
                  className="text-yellow-500 font-bold hover:underline"
                >
                  Go to log in
                </Link>
              </p>
            </div>

            {/* Social Sign-In */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">Or sign up with</p>
              <div className="flex justify-center mt-2 space-x-4">
                <button
                  onClick={handleGoogleSignIn}
                  className="p-2 rounded-full bg-gray-100 text-2xl hover:bg-gray-200"
                >
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
          {/* Right Section - Image */}
          <div className="md:w-1/2  flex items-center justify-center rounded-l-lg">
            <img
              src={loginImage}
              alt="Cafe Illustration"
              className="w-3/4  rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
