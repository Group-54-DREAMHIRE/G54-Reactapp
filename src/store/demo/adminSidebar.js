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


export const adminSidebar = [
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
      label: "Payments",
      key: "/payments",
      icon: <AiOutlineDollar/>,
    },
    {
      id: 4,
      label: "Regaistration Requests",
      key: "/registration",
      icon: <AiOutlineSubnode/>,
    },
    {
      id: 5,
      label: "Companies",
      key: "/handlecompanies",
      icon: <HiOutlineBuildingOffice2 />,
    },
    {
      id: 6,
      label: "Candidates",
      key: "/handlecandidates",
      icon: <FiUsers />,
    },
    // {
    //   id: 7,
    //   label: "Edit Landing Page",
    //   key: "/editlanding",
    //   icon: <FiEdit />,
    // },
    {
      id: 8,
      label: "Complaints",
      key: "/complaints",
      icon: <BiCommentX/>,
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
  ]

