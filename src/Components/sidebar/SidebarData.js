import { BiCog } from "react-icons/bi";
import { IoLogOut,IoExtensionPuzzleSharp } from "react-icons/io5";
import { AiFillHeart, AiTwotoneFileExclamation, AiFillDashboard } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
export const routes = [
    
    {
        path: "/",
        name: "Home",
        icon: <FaHome />,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: <AiFillDashboard/>,
    },
    {
        path: "/quizes",
        name: "Quizes",
        icon: <IoExtensionPuzzleSharp/>,
    },
    {
        path: "",
        name: "Account",
        icon: <FaUser />,
        exact: true,
        subRoutes: [
            
            {
                path: "/profile",
                name: "Profile",
                icon: <FaUser />,
            }
        ],
    },
    
    {
        path: "",
        name: "Settings",
        icon: <BiCog />,
        exact: true,
        subRoutes: [
            {
                path: "/changepassword",
                name: "Change Password",
                icon: <FaLock />,
            },
           
        ],
    },
    {
        path: "/logout",
        name: "Log out",
        icon: <IoLogOut/>,
    },
   
];