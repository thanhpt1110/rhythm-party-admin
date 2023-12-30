import 'remixicon/fonts/remixicon.css'
import 'flowbite'
import { Route, Routes } from 'react-router-dom';
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
import React, { useEffect } from 'react';
import { UserProvider } from 'contexts/UserContext';
import { SongProvider } from 'contexts/SongContext';
import { ArtistProvider } from 'contexts/ArtistContext';
import { RoomProvider } from 'contexts/RoomContext';
import { PlaylistProvider } from 'contexts/PlaylistContext';
import { PendingApprovalProvider } from 'contexts/PendingApprovalContext';
import { loginCheckLogin } from 'api/AuthApi';
function App() {
    useEffect(()=>{
        const checkLogin = async() =>{
            try{
                const respone = await loginCheckLogin();
                console.log(respone);
                if(respone.status===200)
                {
                    console.log("Success");
                }
                else if(respone.status === 401)
                {
                    console.log("Un authorized")
                }
                else
                    console.log("error")
            }
            catch(e)
            {
                console.log(e)
            }
        }
        checkLogin();
    })
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path='inboxes' element={<Inbox />} />
                <Route path='pending-approval' element={
                    <PendingApprovalProvider>
                        <PendingApproval />
                    </PendingApprovalProvider>
                } />
                <Route path='users' element={
                    <UserProvider>
                        <User />
                    </UserProvider>
                } />
                <Route path='songs' element={
                    <SongProvider>
                        <Song />
                    </SongProvider>
                } />
                <Route path='playlist' element={
                    <PlaylistProvider>
                        <Playlist />
                    </PlaylistProvider>
                } />
                <Route path='artists' element={
                    <ArtistProvider>
                        <Artist />
                    </ArtistProvider>
                } />
                <Route path='rooms' element={
                    <RoomProvider>
                        <Room />
                    </RoomProvider>
                } />
                <Route path='settings' element={<Setting />} />
                <Route path='support' element={<Support />} />
            </Route>
            <Route path='login' element={<Login />} />
        </Routes>
    );
}

export default App;
