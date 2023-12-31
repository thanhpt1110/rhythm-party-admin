import React from "react";
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Sidebar from "./Sidebar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    return (
        <div className="flex flex-row h-screen w-screen overflow-x-hidden">
            <div className="w-fit h-full overflow-y-auto">
                <Sidebar />
            </div>
            <div className="flex flex-col flex-1 h-full overflow-y-auto bg-zinc-100">
                <ToastContainer 
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    style={{ 
                        position: "absolute",
                        top: 0,
                        right: 0,
                        maxWidth: "320px",
                        zIndex: 9999
                    }}
                />
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
