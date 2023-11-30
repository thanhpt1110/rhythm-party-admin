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
import React from 'react';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path='inboxes' element={<Inbox />} />
                <Route path='pending-approval' element={<PendingApproval />} />
                <Route path='users' element={<User />} />
                <Route path='songs' element={<Song />} />
                <Route path='playlist' element={<Playlist />} />
                <Route path='artists' element={<Artist />} />
                <Route path='rooms' element={<Room />} />
                <Route path='settings' element={<Setting />} />
                <Route path='support' element={<Support />} />
            </Route>
            <Route path='login' element={<Login />}/>
        </Routes>
    );
}

export default App;
