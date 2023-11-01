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
  } from "@ant-design/icons";
  import { BiLogOutCircle,BiCommentX } from "react-icons/bi";
  import { BsBuildingUp } from "react-icons/bs";
  import { FiSlack, FiUsers,FiEdit } from "react-icons/fi";
  import { FaEnvelopeOpenText } from "react-icons/fa";
  import { AiOutlineDollar,AiOutlineSubnode } from "react-icons/ai";
  import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
    
 export const companySidebar = [
    {
      id: 1,
      label: "Dashboard",
      key: "/dashboard",
      icon: <DashboardFilled />,
    },
    {
      id: 2,
      label: "Profile",
      key: "/profile",
      icon: <UserOutlined />,
    },
    {
        id: 3,
        label: "Registration",
        key: "/registration",
        icon: <FileSyncOutlined />,
      },
      {
        id: 4,
        label: "Posted Jobs",
        key: "/postedjobs",
        icon: <FileSyncOutlined />,
      },
      {
        id: 5,
        label: "Posted Events",
        key: "/postedevents",
        icon: <BsBuildingUp />,
      },
      {
        id: 6,
        label: "Schedule Interviews",
        key: "/interviews",
        icon: <FiSlack />,
        children: [
          {
            label: "Schedule Interviews",
            key: "/interviews",
            icon: <FiSlack />,
          },
          {
            label: "Scheduled Interviews",
            key: "/scheduledinterviews",
            icon: <FiSlack />,
          },
        ],
      },
      {
        id: 7,
        label: "Selection Test",
        key: "/scheduletests",
        icon: <FaEnvelopeOpenText />,
        children: [
          {
          label: "Schedule Test",
          key: "/scheduletests",
          icon: <FaEnvelopeOpenText />
          },
          {
            label: "Scheduled Tests",
            key: "/scheduledtests",
            icon: <FaEnvelopeOpenText />
          }
        ]
      },
      // {
      //   id: 8,
      //   label: "Send Annoucements",
      //   key: "/sendnotifications",
      //   icon: <BellOutlined />,
      // },
      {
        id: 9,
        label: "Users",
        key: "/users",
        icon: <FileSyncOutlined />,
      },
      {
        id: 10,
        label: "Settings",
        key: "/settings",
        icon: <SettingFilled />,
        children: [
          {
            label: "ChangePassword",
            key: "/changepassword",
            icon: <LockFilled />,
          },
        ],
      },
      {
        id: 11,
        label: "Logout",
        key: "logout",
        icon: <BiLogOutCircle />,
      }
  ];
  

  