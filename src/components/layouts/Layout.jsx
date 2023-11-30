import React from "react";
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div className="flex flex-row h-screen w-screen overflow-x-hidden">
            <div className="w-fit h-full overflow-y-auto">
                <Sidebar />
            </div>
            <div className="flex flex-col flex-1 h-full overflow-y-auto bg-zinc-100">
                <Header />
                <div className="flex-1 px-5">
                    {<Outlet />}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout
