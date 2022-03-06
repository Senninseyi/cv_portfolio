import React, { useState } from "react";
import ToggleTheme from "./themeToggler";
import Logo from "../assets/logo.svg"
import Sidebar from "./sidebar/sidebar";

const Header = () => {
    const[open,setOpen] = useState(false)
    return (
        <div className="w-full flex justify-center shadow-sm bg-lightmode-primary dark:bg-modedark-primary fixed top-0 left-0">
            <div className="w-full flex justify-between items-center max-w-6xl p-4">
                <div>
                    <img src={Logo} className="w-14 h-14" alt="logo"/>
                </div>
                <nav className="w-1/5 z-10 hidden lg:block">
                    <ul className="flex justify-between">
                        <li className="text-xl dark:text-modedark-others font-medium">Works</li>
                        <li className="text-xl dark:text-modedark-others font-medium">Blog</li>
                        <li className="text-xl dark:text-modedark-others font-medium">Contact</li>
                    </ul>
                </nav>
                <div className="flex items-center">
                    <ToggleTheme ToggleClass="mr-4"/>
                    <button className="lg:hidden flex">Mobile Toggle</button>
                    {/* <Sidebar open/> */}
                </div>
            </div>
        </div>
    )
}

export default Header