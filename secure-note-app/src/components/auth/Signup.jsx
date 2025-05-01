import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Divider from "@mui/material/Divider";
import Buttons from "../../utils/Buttons";
import InputField from "../input-field/InputField";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMyContext } from "../../store/ContextApi";
import { useEffect } from "react";

const Signup = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [role, setRole] = useState();
  const [loading, setLoading] = useState(false);
  // Access the token and setToken function using the useMyContext hook from the ContextProvider
  const { token } = useMyContext();
  const navigate = useNavigate();

  //react hook form initialization
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  useEffect(() => {
    setRole("ROLE_USER");
  }, []);

  const onSubmitHandler = async (data) => {
    const { username, email, password } = data;
    const sendData = {
      username,
      email,
      password,
      role: [role],
    };

    try {
      setLoading(true);
      const response = await api.post("/auth/public/signup", sendData);
      toast.success("Reagister Successful");
      reset();
      if (response.data) {
        navigate("/login");
      }
    } catch (error) {
      // Add an error programmatically by using the setError function provided by react-hook-form
      //setError(keyword,message) => keyword means the name of the field where I want to show the error

      if (
        error?.response?.data?.message === "Error: Username is already taken!"
      ) {
        setError("username", { message: "username is already taken" });
      } else if (
        error?.response?.data?.message === "Error: Email is already in use!"
      ) {
        setError("email", { message: "Email is already in use" });
      }
    } finally {
      setLoading(false);
    }
  };

  //if there is token  exist navigate to the user to the home page if he tried to access the login page
  useEffect(() => {
    if (token) navigate("/");
  }, [navigate, token]);

  return (
    <div className='min-h-[calc(100vh-74px)] flex justify-center items-center bg-gray-50 px-4'>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className='w-full max-w-md bg-white rounded-xl shadow-xl px-6 sm:px-8 py-8 space-y-6'
      >
        <div className='text-center'>
          <h1 className='font-montserrat text-3xl font-bold text-gray-800'>
            Register
          </h1>
          <p className='text-sm text-gray-600 mt-1'>
            Enter your credentials to create a new account
          </p>
        </div>

        <div className='flex items-center justify-between gap-4'>
          <a
            href={`${apiUrl}/oauth2/authorization/google`}
            className='flex items-center justify-center gap-2 w-full border border-gray-300 text-sm font-medium text-gray-700 rounded-md py-2 shadow hover:bg-gray-100 transition'
          >
            <FcGoogle className='text-xl' />
            Google
          </a>
          <a
            href={`${apiUrl}/oauth2/authorization/github`}
            className='flex items-center justify-center gap-2 w-full border border-gray-300 text-sm font-medium text-gray-700 rounded-md py-2 shadow hover:bg-gray-100 transition'
          >
            <FaGithub className='text-xl' />
            GitHub
          </a>
        </div>

        <Divider className='text-sm text-gray-500'>OR</Divider>

        <div className='space-y-3'>
          <InputField
            label='Username'
            required
            id='username'
            type='text'
            message='*Username is required'
            placeholder='Enter your username'
            register={register}
            errors={errors}
          />
          <InputField
            label='Email'
            required
            id='email'
            type='email'
            message='*Email is required'
            placeholder='Enter your email'
            register={register}
            errors={errors}
          />
          <InputField
            label='Password'
            required
            id='password'
            type='password'
            message='*Password is required'
            placeholder='Enter your password'
            register={register}
            errors={errors}
            min={6}
          />
        </div>

        <Buttons
          disabled={loading}
          onClickhandler={() => {}}
          className='bg-red-600 font-semibold text-white w-full py-2 rounded-md hover:bg-red-700 transition'
          type='submit'
        >
          {loading ? "Loading..." : "Register"}
        </Buttons>

        <p className='text-center text-sm text-gray-600'>
          Already have an account?{" "}
          <Link
            className='text-blue-600 hover:underline font-medium'
            to='/login'
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
