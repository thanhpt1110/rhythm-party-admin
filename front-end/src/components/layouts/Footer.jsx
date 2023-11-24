import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-white flex flex-wrap items-center justify-between border px-5 py-5 mx-5 my-5 rounded-lg shadow-md'>
            <ul className='flex gap-5'>
                <li className='hover:cursor-pointer hover:underline'>Terms and conditions</li>
                <li className='hover:cursor-pointer hover:underline'>Privacy Policy</li>
                <li className='hover:cursor-pointer hover:underline'>Licensing</li>
                <li className='hover:cursor-pointer hover:underline'>About</li>
            </ul>
            <div className='flex gap-7 text-xl'>
                <a href="https://github.com/thanhpt1110/rhythm-party"><i class="ri-github-fill" /></a>
                <a href=""><i class="ri-facebook-box-line" /></a>
                <a href=""><i class="ri-instagram-line" /></a>
                <a href=""><i class="ri-twitter-line" /></a>

            </div>
        </footer>
    )
}

export default Footer