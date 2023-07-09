import { BiCog } from "react-icons/bi";
import { IoLogOut,IoExtensionPuzzleSharp } from "react-icons/io5";
import { AiFillHeart, AiTwotoneFileExclamation, AiFillDashboard } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
export const routes = [
    
    {
        id:0,
        path: "/",
        name: "Home",
        icon: <FaHome />,
    },
    {
        id:1,
        path: "/dashboard",
        name: "Dashboard",
        icon: <AiFillDashboard/>,
    },
    {
        id:2,
        path: "/quizes",
        name: "Quizes",
        icon: <IoExtensionPuzzleSharp/>,
    },
    {
        id:3,
        path: "",
        name: "Account",
        icon: <FaUser />,
        exact: true,
        subRoutes: [
            
            {
                id:4,
                path: "/profile",
                name: "Profile",
                icon: <FaUser />,
            }
        ],
    },
    
    {
        id:5,
        path: "",
        name: "Settings",
        icon: <BiCog />,
        exact: true,
        subRoutes: [
            {
                id:6,
                path: "/changepassword",
                name: "Change Password",
                icon: <FaLock />,
            },
           
        ],
    },
    {
        id:7,
        path: "/logout",
        name: "Log out",
        icon: <IoLogOut/>,
    },
   
];