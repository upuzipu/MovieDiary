'use client'

import Link from "next/link";
import {Topbar} from "@/app/components/global/Topbar";


export default function Login() {
    return (
        <div>
            <Topbar/>
            <div className="min-h-screen flex items-center justify-center">
                <div className="h-[100vh]">
                    <div className="flex flex-col items-center justify-center h-screen">
                        <div className="avatar">
                            <div className="w-24 rounded-full m-10">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                            </div>
                        </div>
                        <div className="w-[256px] h-[32px] text-[32px] flex items-center justify-center">
                            <h1>
                                Sign In
                            </h1>
                        </div>
                        <form
                            className="flex flex-col items-center justify-center space-y-4 pt-10">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                     className="w-4 h-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                                </svg>
                                <input id="email" type="text" className="grow" placeholder="Email"/>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                     className="w-4 h-4 opacity-70">
                                    <path fillRule="evenodd"
                                          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <input id="password" type="password" className="grow" placeholder="Password"/>
                            </label>
                            <button className="btn btn-active btn-primary text-secondary">Sign in</button>
                        </form>
                        <Link className="link link-primary mt-2" href="/registration">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}