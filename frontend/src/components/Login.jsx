import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-700 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => documen.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="p-2 m-2">
              <span>Email: </span>
              <br></br>
              <input
                className="w-80 border p-2 m-2 rounded-md"
                type="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className = "flex text-sm text-red-500">This field is required</span>}
            </div>
            <div className="p-2 m-2">
              <span>Password: </span>
              <br></br>
              <input
                className="w-80 border p-2 m-2 rounded-md"
                type="password"
                placeholder="Enter Your Password"
                {...register("password", { required: true })}
              />
              {errors.password && <span className = "flex text-sm text-red-500">This field is required</span>}
              
            </div>
            <div className="flex justify-around">
              <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-400 duration-300">
                Login
              </button>
              <p>
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="text-pink-500 underline cursor-pointer"
                >
                  SignUp
                </Link>
              </p>
            </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
