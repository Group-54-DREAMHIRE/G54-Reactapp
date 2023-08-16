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
import { BiLogOutCircle } from "react-icons/bi";
import { BsBuildingUp } from "react-icons/bs";
import { FiSlack, FiUsers } from "react-icons/fi";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";

import { useSelector } from "react-redux";
import { getUser } from "../auth/userSlice";

//const userType = localStorage.getItem("USERTYPE");
const userType = "admin";
const sidebarItems = [
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
];

if (userType === "candidate") {
  sidebarItems.push(
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
      label: "Interviews",
      key: "/interview",
      icon: <FiSlack />,
    },
    {
      id: 7,
      label: "Selection Test",
      key: "/selectiontest",
      icon: <FaEnvelopeOpenText />,
    },
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
    {
      id: 9,
      label: "Annoucements",
      key: "/announcements",
      icon: <SketchSquareFilled />,
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
  );
} else if (userType === "company") {
  sidebarItems.push(
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
      label: "Schedule Test",
      key: "/scheduletests",
      icon: <FaEnvelopeOpenText />,
    },
    {
      id: 8,
      label: "Send Annoucements",
      key: "/sendnotifications",
      icon: <BellOutlined />,
    },
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
  );
} else if (userType === "admin") {
  sidebarItems.push(
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
      icon: <FiUsers />,
    },
    {
      id: 5,
      label: "Companies",
      key: "/handlecompanies",
      icon: <FiUsers />,
    },
    {
      id: 6,
      label: "Candidates",
      key: "/handlecandidates",
      icon: <FiUsers />,
    },
    {
      id: 7,
      label: "Edit Landing Page",
      key: "/editlanding",
      icon: <FiUsers />,
    },
    {
      id: 8,
      label: "Complaints",
      key: "/complaints",
      icon: <FiUsers />,
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
  );
} else if (userType === null) {
  sidebarItems.push(null);
}

// sidebarItems.sort((a, b) => {
//   return a.id - b.id;
// });

export default sidebarItems;
