import React from "react";
import { AiOutlineLock } from "react-icons/ai";

const Login = () => {
  return (
    <React.Fragment>
      <section className="h-[100vh] bg-blue-50 w-full flex justify-center items-center">

        {/* Login Card (Start) */}
        <figure className="rounded-lg shadow-lg bg-white md:w-1/4">
          <form className="px-10 py-14 text-center space-y-5">

            {/* Login */}
            <div>
              <h1 className="font-semibold text-2xl mb-2">Welcome Back</h1>
              <p className="text-xs text-slate-600 mb-6">Enter your credentials to access your account</p>
            </div>

            {/* Email address */}
            <div className="flex flex-col">
              <label htmlFor="email" class="input-label">Email address</label>
              <input type="email" name="email" className="input-md" placeholder="Enter email" required/>
              <span className="input-error"></span>
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label htmlFor="password" class="input-label">Password</label>
              <input type="password" name="password" className="input-md" placeholder="Enter password" required/>
              <span className="input-error"></span>
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" className="btn-md w-full">
                <AiOutlineLock size={20} className="h-4 w-4 opacity-50 absolute mr-auto" />Sign in
              </button>
            </div>

            {/* Forgot Password */}
            <div>
              <p class="text-slate-600 text-xs">Forgot your password ? <a href="{{route('admin.forgot.password')}}" class="font-medium text-xs text-ascent hover:text-ascent-dark">Reset password</a></p>
            </div>

          </form>
        </figure>
        {/* Login Card (End) */}

      </section>
    </React.Fragment>
  );
}

export default Login