import {
    DashboardFilled,
    BellOutlined,
    SettingFilled,
    SketchSquareFilled,
    LockFilled,
    UserOutlined,
    FileAddOutlined,
    FileSearchOutlined, 
    DropboxOutlined,
    AuditOutlined,
    FileSyncOutlined,

} from '@ant-design/icons';
import { BiLogOutCircle } from 'react-icons/bi';
import { BsBuildingUp } from 'react-icons/bs';
import { FiSlack, FiUsers } from 'react-icons/fi';
import { FaEnvelopeOpenText} from 'react-icons/fa';

const userType = "admin";
const  sidebarItems = [
                {
                    id:1,
                    label: 'Dashboard',
                    key: '/dashboard',
                    icon: <DashboardFilled />
                },
                {
                    id:2,
                    label: 'Profile',
                    key: '/profile',
                    icon: <UserOutlined />
                },
                {
                    id:8,
                    label: 'Settings',
                    key: '/settings',
                    icon: <SettingFilled />,
                    children: [
                        {
                            label: 'ChangePassword',
                            key: '/changepassword',
                            icon: <LockFilled />
                        }
            
                    ]
                },
                {
                    id:9,
                    label: 'Logout',
                    key: 'logout',
                    icon: <BiLogOutCircle />
                }
            ]

            if(userType === "candidate"){
                sidebarItems.push( 
                    {
                        id:3,
                        label: 'Resume',
                        key: '/resume',
                        icon: <AuditOutlined />
                    },
                    {
                        id:4,
                        label: 'Applied Jobs',
                        key: '/appliedjobs',
                        icon: <FileSearchOutlined />
                    },
                    {
                        id:5,
                        label: 'Saved Jobs',
                        key: '/savedjobs',
                        icon: <FileAddOutlined />
                    },
                    {
                        id:6,
                        label: 'Appled Events',
                        key: '/appliedevents',
                        icon: <DropboxOutlined />
                    },
                    {
                        id:7,
                        label: 'Saved Events',
                        key: '/savedevents',
                        icon: <SketchSquareFilled />
                    }
                    )
            }
            else if(userType === "company"){
                sidebarItems.push(
                    {
                    id:3,
                    label: 'Posted Jobs',
                    key: '/postedjobs',
                    icon: <FileSyncOutlined />
                },
                {
                    id:4,
                    label: 'Posted Events',
                    key: '/postedevents',
                    icon: <BsBuildingUp />
                },
                {
                    id:5,
                    label: 'Interviews',
                    key: '/interviews',
                    icon: <FiSlack/>
                },
                {
                    id:6,
                    label: 'Schedule Test',
                    key: '/sheduletests',
                    icon: <FaEnvelopeOpenText/>
                },
                {
                    id:7,
                    label: 'Send Notifications',
                    key: '/sendnotifications',
                    icon: <BellOutlined />
                },
                )}

                else if(userType === "admin"){
                    sidebarItems.push(
                        {
                            id:3,
                            label: 'Users',
                            key: '/users',
                            icon: <FiUsers />
                        }
                    )
                }
             
            sidebarItems.sort((a,b)=>{
                return a.id-b.id;
            });

export default sidebarItems;




