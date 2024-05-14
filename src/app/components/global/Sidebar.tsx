'use client'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Link from "next/link";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/app/redux/store";
import {setHeader} from "@/app/redux/slices/headerSlice";
import React from "react";


export const Sidebar = () => {
    const menuItems = [
        {icon: <HomeOutlinedIcon/>, text: 'Main', href: "/main"},
        {icon: <TrendingUpOutlinedIcon/>, text: 'Rating', href: "/rating"},
        {icon: <EmojiEventsOutlinedIcon/>, text: 'Awards', href: "/awards"},
        {icon: <ChatBubbleOutlineOutlinedIcon/>, text: 'Reviews', href: "/reviews"},
        {icon: <SettingsOutlinedIcon/>, text: 'Settings', href: "/settings"}
    ]
    const dispatcher = useDispatch<AppDispatch>()

    function setHeaderState(event: React.MouseEvent<HTMLAnchorElement>) {
        dispatcher(setHeader(event.currentTarget.textContent || ''))
    }

    return (
        <ul className="menu bg-base-300 w-56 ml-5 rounded-box text-base-content">
            {menuItems.map((item, index) => (
                <li key={index}>
                    <Link href={item.href} onClick={setHeaderState}>{item.icon}{item.text}</Link>
                </li>
            ))}
        </ul>
    )
}