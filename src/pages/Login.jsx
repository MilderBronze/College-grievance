import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import clgLogo from "../images/Clg-logo.png";

const Login = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const accounts = ["Student", "HOD or Principal"];
    const [accountType, setAccountType] = useState(accounts[0]);

    const submitHandler = () => {
        const values = getValues();
        //Values will be in form of object, send these to backend then verify and go to next step
        //Next step:
        navigate(
            accountType === "Student"
                ? `/user/${accounts[0]}`
                : `/user/${accounts[1]}`
        );
    };

    return (
        <div className=" bg-slate-950 text-white p-4 w-screen h-screen flex gap-10">
            <div className="w-[45%] flex flex-col items-center justify-center">
                <img src={clgLogo} alt="college logo" />
                <p className=" lg:text-2xl md:text-xl text-base">Grievance Form</p>
            </div>
            <form
                onSubmit={handleSubmit(submitHandler)}
                className="flex flex-col w-[45%] justify-center gap-7"
            >
                <div className="flex gap-4 px-2 py-2 bg-slate-800 rounded-full max-w-max">
                    {accounts.map((account, i) => (
                        <button
                            key={i}
                            className={`rounded-full px-4 py-1 font-medium ${
                                accountType === account
                                    ? " bg-gray-600 text-yellow-300"
                                    : ""
                            }`}
                            onClick={() => setAccountType(account)}
                            type="button"
                        >
                            {account.replace(" or ", "/")}
                        </button>
                    ))}
                </div>
                <div className="w-[50%] flex flex-col gap-8">
                    {/* UserName */}
                    <div className="flex flex-col gap-1 relative">
                        <label htmlFor="userName" className=" ">
                            Enter your name{" "}
                            <sup className=" text-red-400">*</sup>
                        </label>
                        <input
                            style={{
                                boxShadow:
                                    "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-slate-700 p-[8px] pr-8 text-richblack-5"
                            type="text"
                            id="userName"
                            placeholder="Enter Name"
                            {...register("userName", { required: true })}
                        />
                        {errors.userName && (
                            <span className=" text-slate-500 text-sm -bottom-5 absolute">
                                User name is required.
                            </span>
                        )}
                    </div>
                    {/* Password */}
                    <div className="flex flex-col gap-1 relative">
                        <label htmlFor="password" className=" ">
                            Enter Password{" "}
                            <sup className=" text-red-400">*</sup>
                        </label>
                        <input
                            style={{
                                boxShadow:
                                    "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-slate-700 p-[8px] pr-8 text-richblack-5"
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <span className=" text-red-500 text-sm -bottom-6 absolute">
                                Password is required.
                            </span>
                        )}
                    </div>
                    <button className=" bg-yellow-400 rounded-lg hover:scale-95 transition-all duration-200 px-3 py-1 text-lg font-semibold text-slate-800">
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
