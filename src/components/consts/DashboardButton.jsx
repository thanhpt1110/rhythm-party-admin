export const DASHBOARD_BUTTON_LINKS = [
    {
        key: 'pendingApproval',
        label: 'Pending Approval',
        path: '/pending-approval',
        className: 'text-2xl flex items-center justify-center w-14 h-14 rounded-full text-green-500 bg-green-100 relative text-center',
        percentage: '15%',
        number: 13,
        icon: <i className="ri-stack-line" />
    },
    {
        key: 'song',
        label: 'Song',
        path: '/songs',
        className: 'text-2xl flex items-center justify-center w-14 h-14 rounded-full text-pink-500 bg-pink-100 relative text-center',
        percentage: '39%',
        number: 50,
        icon: <i className="ri-music-2-line" />
    },
    {
        key: 'playlist',
        label: 'Playlist',
        path: '/playlist',
        className: 'text-2xl flex items-center justify-center w-14 h-14 rounded-full text-blue-500 bg-blue-100 relative text-center',
        percentage: '28%',
        number: 17,
        icon: <i className="ri-play-list-line" />
    },
    {
        key: 'user',
        label: 'User',
        path: '/users',
        className: 'text-2xl flex items-center justify-center w-14 h-14 rounded-full text-amber-500 bg-amber-100 relative text-center',
        percentage: '13%',
        number: 36,
        icon: <i className="ri-account-circle-line" />
    },
];