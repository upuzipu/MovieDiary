'use client'

import {Topbar} from "@/app/components/global/Topbar";
import {Sidebar} from "@/app/components/global/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/app/redux/store";
import {useEffect} from "react";
import {setHeader} from "@/app/redux/slices/headerSlice";

export default function Main() {
    const headerState = useSelector((state: RootState) => state.header);
    return (<>
        <Topbar/>
        <div className="flex">
            <div className="w-[15%]">
                <Sidebar/>
            </div>
            <div className="w-[85%] mr-3 h-[216px] bg-base-300 rounded-xl p-3">
                <h1>
                    {headerState.header}
                </h1>
            </div>
        </div>
        <div className="m-5 bg-base-300 rounded-xl p-3 w-[98%] h-[100vh]"></div>
    </>)
}