import React, { useState } from "react";
import { useForm } from "react-hook-form";
import clgLogo from "../../images/Clg-logo.png";
import { Issues } from "../../data/Issues";

const StudentData = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    //Fetch this Name and USN from backend
    const credentials = {
        Name: "Sumit Raj",
        USN: "1RN21IS163",
    };

    const [currentIssue, setCurrentIssue] = useState(null);

    const submitHandler = () => {
        const values = getValues();
        //Values will be in form of object, send these to backend then verify and go to next step
        //Next step:
    };

    return (
        <div className=" bg-[rgba(255,90,0,0.7)] w-screen flex justify-center items-center min-h-screen">
            <div className=" bg-gray-200 lg:w-[80%] w-[90%] lg:my-16 my-8 rounded-lg flex lg:flex-row flex-col items-center lg:gap-[2%] gap-4">
                <div className="w-[38%] flex flex-col items-center">
                    <img src={clgLogo} alt="college-logo" className="w-full" />
                    <p className=" lg:text-xl md:text-lg text-sm font-semibold">
                        RNS Institute of Technology
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit(submitHandler)}
                    className=" bg-gray-200 lg:w-[60%] w-[80%] lg:my-16 my-2 rounded-lg text-slate-800 lg:p-6 p-2 flex flex-col gap-5 items-center lg:items-stretch"
                >
                    <div className="flex gap-2 lg:text-base text-xs">
                        <p className="w-12 font-semibold">Name: </p>
                        <p className=" text-[rgb(62,62,149)] font-semibold border-2 border-blue-950 px-2 lg:px-12 rounded-lg lg:min-w-[200px] min-w-min">
                            {credentials.Name}
                        </p>
                    </div>
                    <div className="flex gap-2 lg:text-base text-xs">
                        <p className="w-12 font-semibold">USN: </p>
                        <p className=" text-[rgb(62,62,149)] font-semibold border-2 border-blue-950 px-2 lg:px-12 rounded-lg lg:min-w-[200px] min-w-min">
                            {credentials.USN}
                        </p>
                    </div>
                    <div className="flex flex-col ">
                        <p className=" font-semibold">Issues: </p>
                        <div className="flex flex-wrap lg:justify-start justify-center gap-4 mt-10">
                            {Issues.map((issue, i) => (
                                <button
                                    key={i}
                                    className={`lg:w-[120px] w-[80px] flex flex-col gap-1 items-center justify-center border border-black p-3 rounded-xl ${
                                        currentIssue === issue.heading
                                            ? "bg-slate-300"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setCurrentIssue(issue.heading)
                                    }
                                >
                                    <img
                                        src={issue.image}
                                        alt={issue.heading}
                                        className=""
                                    />
                                    <p
                                        className="font-medium lg:text-base text-xs"
                                        type="button"
                                    >
                                        {issue.heading}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className=" lg:w-[80%] w-[100%] flex flex-col gap-4 mt-4">
                        <textarea
                            name=""
                            id=""
                            cols="20"
                            rows="10"
                            className={`rounded-lg px-4 py-2`}
                            placeholder="Enter issue in brief"
                        ></textarea>
                        <button className=" bg-[rgb(62,62,149)] rounded-lg hover:scale-95 transition-all duration-200 lg:px-6 lg:py-2 lg:text-lg px-4 py-1 text-base text-white mx-auto">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentData;
