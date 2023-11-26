import React from "react";
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Sidebar from "./Sidebar";

const Layout = () => {
	return (
		<div className="flex flex-row h-screen w-screen overflow-hidden">
			<Sidebar />
            <div className="flex flex-col flex-1 bg-zinc-100">
                <Header />
                <div className="flex-1 px-5 min-h-0 overflow-auto">
                    {<Outlet />}
                </div>
                <Footer />
            </div>
		</div>
	);
};

export default Layout
