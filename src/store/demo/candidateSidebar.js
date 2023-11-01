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
    
 export const candidateSidebar = [
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
        label: "Resume",
        key: "/resume",
        icon: <AuditOutlined />,
      },
      {
        id: 4,
        label: "Applied Jobs",
        key: "/appliedjobs",
        icon: <FileSearchOutlined />,
      },
      {
        id: 5,
        label: "Saved Jobs",
        key: "/savedjobs",
        icon: <FileAddOutlined />,
      },
      {
        id: 6,
        label: "Scheduled Interviews",
        key: "scheduledinterviews",
        icon: <FiSlack />,
      },
      // {
      //   id: 7,
      //   label: "Scheduled Test",
      //   key: "/selectiontest",
      //   icon: <FaEnvelopeOpenText />,
      // },
      {
        id: 8,
        label: "Appled Events",
        key: "/appliedevents",
        icon: <DropboxOutlined />,
      },
      {
        id: 9,
        label: "Saved Events",
        key: "/savedevents",
        icon: <SketchSquareFilled />,
      },
      // {
      //   id: 9,
      //   label: "Annoucements",
      //   key: "/announcements",
      //   icon: <SketchSquareFilled />,
      // },
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
  

  