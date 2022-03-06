import React from 'react'

const Background = ({children}) => {
    return (
        <body className='bg-lightmode-primary dark:bg-modedark-primary transition-all'>
            {children}
        </body>
    )
}

export default Background