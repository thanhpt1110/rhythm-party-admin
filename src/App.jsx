import 'remixicon/fonts/remixicon.css'
import 'flowbite'
import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Dashboard from './components/contents/Dashboard';
import Login from './pages/Login';
import Inbox from './components/contents/Inbox';
import PendingApproval from './components/contents/PendingApproval'
import User from './components/contents/User';
import Song from './components/contents/Song';
import Playlist from './components/contents/Playlist';
import Artist from './components/contents/Artist';
import Room from './components/contents/Room';
import Setting from './components/contents/Setting';
import Support from './components/contents/Support';
import React, { useEffect, useState } from 'react';
import { UserProvider } from 'contexts/UserContext';
import { SongProvider } from 'contexts/SongContext';
import { ArtistProvider } from 'contexts/ArtistContext';
import { RoomProvider } from 'contexts/RoomContext';
import { PlaylistProvider } from 'contexts/PlaylistContext';
import { PendingApprovalProvider } from 'contexts/PendingApprovalContext';
import { loginCheckLogin } from 'api/AuthApi';
import { useAuth } from 'contexts/AuthContext';
function App() {
    const [isLoading, setIsLoading] = useState(true)
    const {authUser,setAuthUser} = useAuth();
    useEffect(()=>{
        const checkLogin = async() =>{
            try{
                const response = await loginCheckLogin();
                console.log(response);
                if(response.status===200)
                {
                    console.log("Success");
                    await setAuthUser(response);
                    localStorage.setItem('accessToken', response.dataRes.user.user.accessToken)
                }
                else if(response.status === 401)
                {
                    console.log("Unauthorized")
                }
                else
                    console.log("error")
            }
            catch(e)
            {
                console.log(e)
            }
            finally{
                setIsLoading(false)
            }
        }
        checkLogin();
    },[])
    return (
        isLoading ?  (
            <div className='text-center w-screen h-screen py-60'>
                <span className="loader h-20 w-20 "></span>
            </div> ) :
        <Routes>
            <Route path='/' element={authUser ? <Layout /> : <Navigate to='/login'/>}>
                <Route index element={<Dashboard />} />
                <Route path='inboxes' element={<Inbox />} />
                <Route path='pending-approval' element={
                    <PendingApprovalProvider>
                        <PendingApproval />
                    </PendingApprovalProvider>
                } />
                <Route path='users' element={ authUser ?
                    (<UserProvider>
                        <User />
                    </UserProvider>) : <Navigate to='/login'/>
                } />
                <Route path='songs' element={authUser ? (
                    <SongProvider>
                        <Song />
                    </SongProvider>) : <Navigate to='/login'/>
                } />
                <Route path='playlist' element={authUser ?(
                    <PlaylistProvider>
                        <Playlist />
                    </PlaylistProvider>): <Navigate to='/login'/>
                } />
                <Route path='artists' element={authUser ?(
                    <ArtistProvider>
                        <Artist />
                    </ArtistProvider>): <Navigate to='/login'/>
                } />
                <Route path='rooms' element={
                    authUser ? (
                    <RoomProvider>
                        <Room />
                    </RoomProvider>): <Navigate to = '/login'/>
                } />
                <Route path='settings' element={authUser ? <Setting /> : <Navigate to='/login'/>} />
                <Route path='support' element={authUser ? <Support />: <Navigate to='/login'/>} />
            </Route>
            <Route path='login' element={authUser ? <Navigate to= '/'/> :<Login />} />
        </Routes>
    );
}

export default App;
