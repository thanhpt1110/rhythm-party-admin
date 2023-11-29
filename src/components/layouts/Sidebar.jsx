import React from 'react'
import Logo from '../../assets/logo.png';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../consts/Sidebar';
import {Link, useLocation} from 'react-router-dom'
import classNames from 'classnames'

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-violet-800 hover:no-underline hover:text-white focus:bg-violet-800 active:bg-violet-800 rounded-lg';
const buttonLogoutClass = 'cursor-pointer flex items-center gap-2 text-red-500 font-light px-3 py-2 mb-3 hover:bg-red-500 hover:no-underline hover:text-white focus:bg-red-500 active:bg-red-500 rounded-lg'

const Sidebar = () => {
    return (
        <div className='bg-violet-900 flex flex-col min-w-fit min-h-screen'>
            <div className='flex items-center gap-2 px-6 py-5 bg-violet-950 flex-shrink-0'>
                <img src={Logo} alt='WebsiteLogo' className='h-10 w-10' />
                <div className='self-center text-3xl font-semibold whitespace-nowrap text-white'>
                    Rhythm Party
                </div>
            </div>
            <div className='flex flex-1 flex-col px-5 gap-2 py-2 bg-violet-900'>
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
            <div className='flex flex-col px-5 gap-2 py-2 pt-5 border-t border-white bg-violet-900'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
                <div className={buttonLogoutClass}>
                    <span className='mr-2 text-2xl'>
                        <i class="ri-logout-box-r-line" />
                    </span> 
                    <span className='text-lg'>
                        Sign Out
                    </span>
				</div>
            </div>
        </div>
    )
}
export default Sidebar

const SidebarLink = ({ link }) => {
    const {pathname} = useLocation()

    return (
        <Link to={link.path} className={classNames(pathname === link.path ? 'bg-violet-800 text-white' : 'text-neutral-200', linkClass)}>
            <span className=''>
                <span className='mr-4 text-2xl'>
                    {link.icon}
                </span>
                <span className='text-lg'>
                    {link.label}
                </span>
            </span>
        </Link>
    )
}