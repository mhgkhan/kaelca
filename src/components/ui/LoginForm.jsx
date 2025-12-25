"use client";



import React, { useState } from 'react'
import Link from "next/link"
import { FaKey, FaUser } from "react-icons/fa";
import { submitForm } from '@/utils/UsableFunctions';


const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [isEmailValid, seIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);


    const [loading, setLoading] = useState(false);

    const [resMessage, setResMessage] = useState("");
    const [resErr, setResErr] = useState(false);
    const [isRes, setIsRes] = useState(false);



    const updateInput = e => {
        if (e.target.name == "email") {
            // validate email
            if (e.target.value.length < 5) {
                seIsEmailValid(false);
            }
            else {
                seIsEmailValid(true);
            }
        }
        else if (e.target.name == "password") {
            // validate password
            if (e.target.value.length < 5) {
                setIsPasswordValid(false);
            }
            else {
                setIsPasswordValid(true);
            }
        }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }



    const submitLogin = async e => {
        e.preventDefault();


        if (!isEmailValid) {
            setResErr(true);
            setResMessage("email is not vlaid");
        }
        else if (!isPasswordValid) {
            setResErr(true);
            setResMessage("Password is not vlaid");
        }

        else {

            // let obj = {};
            setLoading(true);
            const sendRequest = await submitForm("/api/auth/admin/signin", "POST", { "content-type": "application/json" }, formData)

            if (sendRequest.success) {
                setResErr(false);
                setResMessage(sendRequest.message);
            }
            else {
                setResErr(true);
                setResMessage(sendRequest.message);
            }
            setIsRes(true);

            setLoading(false);
            if (!resErr) {
                setTimeout(() => {
                    location.href = "/profile"
                }, 1000);
            }
            else {
                return;
            }
        }

    }



    return (
        <form onSubmit={submitLogin} autoComplete="off" className="md:w-[60%] w-[90%]  rounded-md  p-2 my-5 backdrop-blur-md bg-[#c2c5ee5d] mx-auto block">
            <h1 className="text-2xl font-bold m-2">Login to your account!</h1>
            <p className="text-lg p-1">You need to login to your account!.</p>

            <br />
            <div className="input w-full my-1 flex items-center justify-center gap-2 border-b border-blue-900 py-1">
                <span className="text-xl"><FaUser /> </span>
                <input disabled={loading} onChange={updateInput} type="email" name="email" required={true} placeholder="Enter email" className="w-full  outline-none px-2 py-1 text-lg bg-none" />
            </div>
            {!isEmailValid ? <span className={`text-sm w-full text-red-500 font-bold text-center ${!isEmailValid ? "h-auto" : "h-0 overflow-hidden"}`}>Email is not Valid </span> : ""}
            <br />
            <div className="input w-full my-1 flex items-center justify-center gap-2 border-b border-blue-900 py-1">
                <span className="text-xl"><FaKey /> </span>
                <input disabled={loading} onChange={updateInput} type="password" name="password" required={true} placeholder="Password" className="w-full  outline-none px-2 py-1 text-lg bg-none" />
            </div>
            {!isPasswordValid ? <span className={`text-sm w-full text-red-500 font-bold text-center ${!isPasswordValid ? "h-auto" : "h-0 overflow-hidden"}`}>Password should be 8 characters long. </span> : ""}

            <br />

            <button disabled={!isEmailValid || !isPasswordValid || loading} type="submit" className="bg-blue-900 text-white px-3 p-2 m-1 text-xl font-bold rounded-md cursor-pointer disabled:bg-gray-500">Login</button>


            <div className={`p-2 rounded-md my-1  transition-all  flex items-center justify-start  ${isRes ? "h-[50px] opacity-100" : "h-0 opacity-0"} duration-300 ${resErr ? "bg-red-500" : "bg-green-500"}`} onClick={() => setIsRes(false)}>
                <p className='text-lg'>{resMessage}</p>
            </div>


            <p className="my-5 font-bold"> Not have an account ! <Link href="/register" className="text-blue-800">Register </Link> </p>
            <p className="my-5 text-right"> <Link href="/register" className="text-blue-800">Forget Password  </Link> </p>

        </form>

    )
}

export default LoginForm
