import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className=" flex h-screen items-center justify-center">
        <div id="my_modal_3" className="">
          <div className="modal-box dark:bg-slate-700 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="p-2 m-2">
              <span>Name: </span>
              <br></br>
              <input
                className="w-80 border p-2 m-2 rounded-md"
                type="text"
                placeholder="Enter Your Name"
                {...register("name", { required: true })}
              />
            </div>
            {errors.name && <span className = "flex text-sm text-red-500">This field is required</span>}

            <div className="p-2 m-2">
              <span>Email: </span>
              <br></br>
              <input
                className="w-80 border p-2 m-2 rounded-md"
                type="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}

              />
            </div>
            {errors.email && <span className = "flex text-sm text-red-500">This field is required</span>}

            <div className="p-2 m-2">
              <span>Password: </span>
              <br></br>
              <input
                className="w-80 border p-2 m-2 rounded-md"
                type="password"
                placeholder="Enter Your Password"
                {...register("password", { required: true })}

              />
            </div>
            {errors.password && <span className = "flex text-sm text-red-500">This field is required</span>}

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-400 duration-300">
                SignUp 
              </button>
              <p className = "text">
                Have Account?{" "}
                <button
                  className="text-pink-500 underline cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>{" "}
                <Login/>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
