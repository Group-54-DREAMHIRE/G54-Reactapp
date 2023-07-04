import { NavLink } from "react-router-dom";
import { IoLogOut, IoExtensionPuzzleSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { routes } from './SidebarData';
import { Animations } from './SidebarAnimations';

const Sidebar = ({ handleLogin }) => {

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = Animations.inputAnimation;
  const showAnimation = Animations.showAnimation;

  return (
    <>
      <div className="sidebar-main-container-w">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "40px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}>
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo">
                  DREAM HIRE
                </motion.h1>
              )}
            </AnimatePresence>
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch onClick={toggle} />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                  className="nav-search-w" />)}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="sidebar-link-w"
                  activeClassName="active">
                  <label key={index}> {route.icon}</label>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key={index}
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text">
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
          <div
            className="logout-con-w"
            onClick={handleLogin}>
            <label> <IoLogOut /></label>
            <AnimatePresence>
              (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logout-w">
                Logout
              </motion.div>
              )
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;