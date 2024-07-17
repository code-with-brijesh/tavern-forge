import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BtnComponent from '@/app/_components/Button/BtnComponent'

// Define the Header functional component
const Header = () => {
    return (
        // Define the header element with styling for flexbox, spacing, and positioning
        <header className='flex items-center justify-between w-full z-[9] px-4 py-5'>
            {/* Container for the logo */}
            <div className='logo'>
                {/* Link component for navigation, wrapping the Image component for the logo */}
                <Link href="#">
                    <Image 
                        src="/assets/images/logo.png" 
                        alt='logo' 
                        height={52} 
                        width={132} 
                        className='max-w-[100px] sm:max-w-[130px]' 
                    />
                </Link>
            </div>
            {/* Button component for "Contact" */}
            <BtnComponent title="Contact" variant="filled" />
        </header>
    )
}

// Export the Header component as the default export
export default Header
