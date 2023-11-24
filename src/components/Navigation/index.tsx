import React from 'react'
import Logo from "../../assets/logo.svg"
export default function Navigation(): JSX.Element {
    return (
        <header className='sticky z-50 top-0 px-12'>
            <nav className='bg-base_white px-4 py-6 border-2 border-base_white shadow-md rounded-full'>
                {/* max-w-screen-xl */}
                <div className='flex justify-between items-center  mx-6'>
                    <img src={Logo} alt='componay-logo' />
                    <div className='flex justify-between items-center'>
                        links
                    </div>
                    <div>
                        icons
                    </div>
                </div>
            </nav>
        </header>
    )
}
