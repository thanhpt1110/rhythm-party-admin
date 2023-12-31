import { loginAdmin } from 'api/AuthApi';
import { useAuth } from 'contexts/AuthContext';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { authUser, setAuthUser } = useAuth();
    const navigate = useNavigate();
    const handleSignIn = async () => {
        try {
            const respone = await loginAdmin(username, password);
            if (respone.status === 200) {
                setAuthUser(respone.dataRespone.data);
                window.location.href = 'http://localhost:3001';
                // window.open('http://localhost:3001', 'self')
            }
            else {
                alert("Login failed");
            }
        } catch (error){
            alert(error);
        }
    }
    useEffect(() => {
        if (authUser)
            navigate('/')
    }, [])
    const handleUserNameOnchange = (e) => {
        setUserName(e.target.value);
    }
    const handlePasswordOnchange = (e) => {
        setPassword(e.target.value);
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Console <span className='text-violet-800'>Rhythm Party</span>
                    </h2>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input id="username" value={username} onChange={handleUserNameOnchange} name="username" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" value={password} onChange={handlePasswordOnchange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button type="button" onClick={handleSignIn} className="group relative w-full flex justify-center 
                        py-2 px-4 border border-transparent text-sm font-medium 
                        rounded-md text-white
                        bg-indigo-600 hover:bg-indigo-700 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
