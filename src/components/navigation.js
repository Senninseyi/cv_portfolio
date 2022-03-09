import React, { useState } from "react";
import ToggleTheme from "./themeToggler";
import Logo from "../assets/logo.svg"
import { CgMenuRight,CgClose } from 'react-icons/cg'
import { NavItems } from "./navs/navItems";
import { Link } from "react-router-dom";


const Header = () => {
    const initialState = false
    const[open,setOpen] = useState(initialState)
    // console.log(open);

    const drawerToggleHandler = () => {
        setOpen(() => !open)
        console.log(!open);
    }

    return (
        <div className="w-full flex justify-center shadow-md bg-lightmode-primary dark:bg-modedark-primary fixed top-0 left-0">
            <div className="w-full flex justify-between items-center max-w-6xl h-24 px-8">
                <div className="flex items-center">
                    <Link to='/'>
                        <img src={Logo} className="w-14 h-14" alt="logo"/>
                    </Link>
                    {/* <h2 className="font-bold ml-4 text-2xl">Fuhrer Dev</h2> */}
                </div>
                {/* desktop nav */}
                <nav className="w-1/5 z-10 hidden lg:block">
                    <ul>
                        <NavItems/>
                    </ul>
                </nav>
                {/* mobile nav */}
                <div className="flex items-center">
                    <ToggleTheme ToggleClass="mr-4"/>
                    <button onClick={() => drawerToggleHandler()} className="lg:hidden flex">
                        <CgMenuRight className="text-lightmode-secondary dark:text-modedark-accents" size={28}/>
                    </button>
                    <div className={open ? 'h-screen bg-lightmode-primary dark:bg-modedark-primary z-50 w-full absolute full top-0 right-0' : 'hidden'}>
                        <div className="h-24 px-8 flex bg-lightmode-primary justify-between shadow-md items-center">
                            <button onClick={() => !drawerToggleHandler()}>
                                <CgClose className="text-modedark-accents dark:text-lightmode-secondary" size={28}/>
                            </button>
                            <h2 className="font-bold text-2xl">Fuhrer Dev</h2>
                        </div>
                        <div className="p-8">
                            <NavItems/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header