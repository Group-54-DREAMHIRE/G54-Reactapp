import {
    DashboardFilled,
    MessageFilled,
    SettingFilled,
    SketchSquareFilled,
    LockFilled,
    PushpinFilled,
    CrownFilled,
} from '@ant-design/icons';

export  const sidebarItem = [
    {
        label: 'Dashboard',
        key: '/home',
        icon: <DashboardFilled />,
    },
    {
        label: 'Posts',
        key: '/posts',
        icon: <PushpinFilled />,
    }, {
        label: 'Add Job Post',
        key: '/addjobpost',
        icon: <CrownFilled />,
    },
    {
        label: 'Candidateresumes',
        key: '/candidateresumes',
        icon: <MessageFilled />,
    },
    {
        label: 'Appearance',
        key: '/appearence',
        icon: <SketchSquareFilled />,
    },
    {
        label: 'Settings',
        key: '/settings',
        icon: <SettingFilled />,
        children: [
            {
                label: 'ChangePassword',
                key: '/changepassword',
                icon: <LockFilled />,
            },

        ]
    },
    {
        label: 'Logout',
        key: 'logout',
        icon: <SketchSquareFilled />,
    },
];