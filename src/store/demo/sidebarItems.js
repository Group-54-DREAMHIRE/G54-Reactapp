

import {
    DashboardFilled,
    MessageFilled,
    SettingFilled,
    SketchSquareFilled,
    LockFilled,
    PushpinFilled,
    CrownFilled,
} from '@ant-design/icons';

export  const sidebarItems = [
            {
                label: 'Dashboard',
                key: '/dashboard',
                icon: <DashboardFilled />,
            },
            {
                label: 'Profile',
                key: '/profile',
                icon: <PushpinFilled />,
            }, {
                label: 'Add Job Post',
                key: '/addjobpost',
                icon: <CrownFilled />,
            },
            {
                label: 'Candidateresumes',
                key: '/pending',
                icon: <MessageFilled />,
            },
            {
                label: 'Dula',
                key: '/candidateresumes',
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
      

 
