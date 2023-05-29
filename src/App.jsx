import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const App = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [userInfo, setUserInfo] = useState();

  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  }

  return (
    <div className='container-fluid d-flex w-50 h-100 mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded md-w-100'>
      <Form onSubmit={ handleSubmit(onSubmit)} className='w-100'>

        {/* Text */}

        <h2>Welcome Back</h2>
        <p>Welcome back! Please enter your details:</p>

        {/* User input */}


        {/* Email */}
        <input type="email" name="email" id="email" placeholder='Email' className='form-control mb-3'{...register ("email", { required: true, pattern: /^[^@]+@[^@ ]+\.[^@ .]{2,}$/})}/>
        {errors.email?.type === "required" && (
          <p className='errorMsg text-danger'>
            Email is required.
          </p>
        )}
        {errors.email?.type === "pattern" && (
          <p className='errorMsg text-danger'>
            Email is not valid
          </p>
        )}


        {/* Password */}
        <input type="password" name="password" id="password" placeholder='Password' className='form-control mb-3'{...register ("password", { required: true, minLength: 4})}/>
        { errors.password?.type === "required" && (
          <p className='errorMsg text-danger'>
            Password is required.
          </p>
        )}
        {errors.password?.type === "minLength" && (
          <p className='errorMsg text-danger'>
            Password should be at-least 4 characters.
          </p>
        )}

        {/* Login button */}

        <button type='submit' className='btn btn-primary w-100 mb-3'>Login</button>


        {/* Forgot password */}

        <h5 className='text-center mt-2'>Forgot Password?</h5>


        {/* Other login options */}

        <button type='button' className='btn btn border border-dark-subtle w-100 mb-2'>
            <span><img src="./src/images/facebook-logo.png" className='float-start w-10'/>
            </span>
          <p className='mt-2'>Login with facebook</p>
        </button>

        <p className='text-center'>Or</p>

        <button type='button' className='btn btn border border-dark-subtle w-100 mb-2'>
            <span><img src="./src/images/google-logo.png" className='float-start w-10'/>
            </span>
          <p className='mt-3'>Login with Google</p>
        </button>

        {/* Sign up link */}

        <p className='text-center'>Don't have an account? <Link to='Sign' className='text-decoration-none'>Sign Up</Link> </p>

      </Form>
    </div>
  )
}

export default App
