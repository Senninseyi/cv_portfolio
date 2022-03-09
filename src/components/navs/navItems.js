import React from "react";
import { NavLink } from "react-router-dom";

export const NavItems = () => {

    const Links = [
        {
            linkName: 'work',
            link: '/works'
        },
        {
            linkName: 'blog',
            link: '/blog'
        },
        {
            linkName: 'contact',
            link: '/contact'
        }
    ]

    return (
        <li className="text-lg w-full h-44 items-start justify-between capitalize lg:h-auto flex flex-col lg:flex-row lg:justify-between font-semibold">
            {Links.map(i => (
                <NavLink 
                    className={({isActive}) => isActive ? 'text-lightmode-accents' : 'text-black dark:text-white'}
                    to={i.link}>
                        {i.linkName}
                </NavLink>
            ))}
        </li>
    )
}