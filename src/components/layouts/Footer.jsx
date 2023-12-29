import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-white flex flex-wrap items-center justify-between border px-5 py-5 mx-5 my-5 rounded-lg shadow-md'>
            <ul className='flex gap-5'>
                <li className='hover:cursor-pointer hover:underline'>Terms and Conditions</li>
                <li className='hover:cursor-pointer hover:underline'>Privacy Policy</li>
                <li className='hover:cursor-pointer hover:underline'>Licensing</li>
                <li className='hover:cursor-pointer hover:underline'>About</li>
            </ul>
            <div className='flex gap-7 text-xl'>
                <a href="https://github.com/thanhpt1110/rhythm-party" target='blank'><i className="ri-github-fill" /></a>
                <a href="/"><i className="ri-facebook-box-line" /></a>
                <a href="/"><i className="ri-instagram-line" /></a>
                <a href="/"><i className="ri-twitter-line" /></a>

            </div>
        </footer>
    )
}

export default Footer