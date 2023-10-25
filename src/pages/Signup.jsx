import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (disabled) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (error) {
        setError(error.message);
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const handleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && error}
        <div className='hero min-h-screen bg-base-200'>
          <div className='hero-content flex-col'>
            <div className='text-center'>
              <h1 className='text-5xl font-bold'>Enjoy the little things</h1>
              <p className='pt-6'>
                Moments in time, come and go, but the memories stay forever.
              </p>
              <p className='py-4'>Family Album.</p>
            </div>
            <div className='card sm:w-[30rem] shadow-2xl bg-base-100'>
              <div className='card-body'>
                <div className='form-control mt-6 !gap-16 justify-center !flex-row'>
                  <button
                    className='btn !w-[30%]'
                    disabled={disabled}
                    onClick={handleDisabled}
                  >
                    Sign up
                  </button>
                  <button
                    className='btn !w-[30%]'
                    disabled={!disabled}
                    onClick={handleDisabled}
                  >
                    Sign in
                  </button>
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='email'
                    placeholder='email'
                    className='input input-bordered'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    type='password'
                    placeholder='password'
                    className='input input-bordered'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                  {!disabled && (
                    <label className='label'>
                      <a href='#' className='label-text-alt link link-hover'>
                        Forgot password?
                      </a>
                    </label>
                  )}
                </div>
                <div className='form-control mt-6'>
                  {!disabled ? (
                    <button className='btn btn-primary'>Signin</button>
                  ) : (
                    <button className='btn btn-primary'>Signup</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
