import React, { useContext } from "react";

import { FaSun, FaMoon } from 'react-icons/fa'
import { ThemeContext } from '../theming/themeContext'

const ToggleTheme = (props) => {
    const {theme, setTheme} = useContext(ThemeContext)

    return(
        <div className={ props.ToggleClass + ' ' + "transition duration-500 ease-in-out rounded-full p-2" }>
            {
                theme === 'dark' ? (
                    <FaSun onClick={ () => setTheme(theme === 'dark' ? 'light' : 'dark') }
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                    />
                ) : (
                    <FaMoon onClick={ () => setTheme(theme === 'dark' ? 'light' : 'dark') }
                        className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"/>
                )
            }
        </div>
    )
}

export default ToggleTheme