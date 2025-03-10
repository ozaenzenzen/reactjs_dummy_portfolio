import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Bell, ChevronLast, ChevronLeft, ChevronsLeft, DoorOpen, LogOut, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "../hooks/use-theme";
import profilePicture from "../assets/profile-image2.jpg";
import { Menu, Popover, Transition } from "@headlessui/react";
import { cn } from "../utils/cn";
import logoLight from "@/assets/logo-light.svg";
import logoDark from "@/assets/logo-dark.svg";
import { navbarLinks, newMenus } from "@/constants";
import { Link, NavLink } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ collapsed, setCollapsed, isDesktopDevice }) => {
    const { theme, setTheme } = useTheme();

    return (
        <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
            {/* Logo Fauzan Lab */}
            <button
                onClick={!isDesktopDevice ? () => setCollapsed(!collapsed) : null}
                className="flex items-center gap-x-3"
            >
                <div className="flex items-center justify-center gap-x-3 p-3">
                    {/* <img
                        src={logoLight}
                        alt="Logoipsum"
                        className="dark:hidden"
                    />
                    <img
                        src={logoDark}
                        alt="Logoipsum"
                        className="hidden dark:block"
                    /> */}
                    {!isDesktopDevice && <GiHamburgerMenu className="mr-3 size-7 text-slate-950 dark:text-slate-50" />}
                    <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">Fauzan's Lab</p>
                    {/* {isDesktopDevice && <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">Fauzan's Lab</p>} */}
                </div>
                {/* <button
                    className="btn-ghost size-10"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <ChevronsLeft className={collapsed && "rotate-180"} />
                </button>
                <div className="input">
                    <Search
                        size={20}
                        className="text-slate-300"
                    />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search"
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50"
                    />
                </div> */}
            </button>

            {/* Navigation Menu */}
            <div className="flex items-center gap-x-3">
                <div className="inline-flex w-full flex-row gap-y-4 space-x-2 overflow-y-auto overflow-x-hidden p-3 [scrollbar-width:_thin] lg:space-x-10">
                    {newMenus.map((newMenu) => (
                        //     <Link
                        //     key={newMenu.title}
                        //     to={newMenu.path}
                        //     className={cn("sidebar-group-title", collapsed && "md:items-center hidden lg:block")}
                        // >
                        //     <p className={cn("sidebar-group-title-v2", collapsed && "md:w-[45px]", "w-full cursor-pointer text-center p-2")}>{newMenu.title}</p>
                        // </Link>
                        <Link
                            key={newMenu.title}
                            to={newMenu.path}
                            className={cn("sidebar-group-title", "hidden md:block md:items-center")}
                        >
                            <p className={cn("sidebar-group-title-v2", "w-full cursor-pointer p-2 text-center")}>{newMenu.title}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Button Dark Light */}
            <div className="flex items-center gap-x-3">
                <button
                    className="btn-ghost size-10"
                    onClick={() => {
                        setTheme(theme === "light" ? "dark" : "light");
                    }}
                >
                    <Sun
                        size={20}
                        className="dark:hidden"
                    />
                    <Moon
                        size={20}
                        className="hidden dark:block"
                    />
                </button>
                {/* <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button className={cn(open && "bg-slate-100 dark:bg-blue-950", "btn-ghost")}>
                                <Bell size={18} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                                    <div className="rounded-sm bg-white px-2 py-2.5 shadow-md ring-1 ring-black ring-opacity-5">
                                        <strong className="text-base font-medium text-slate-900">Notifications</strong>
                                        <div className="mt-2 py-1">This is notification panel</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover> */}
                {/* <button className="btn-ghost size-10">
                    <Bell size={20} />
                </button> */}
                {/* <Menu
                    as="div"
                    className="relative"
                >
                    <div>
                        {" "}
                        <Menu.Button>
                            <div className="size-10 cursor-pointer overflow-hidden rounded-full">
                                <img
                                    src={profilePicture}
                                    alt="profilePicture"
                                    className="size-full object-cover"
                                />
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-sm bg-white p-1 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-900">
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        // className={cn(active && "bg-gray-100", "cursor-pointer rounded-sm px-4 py-2 text-gray-700 focus:bg-gray-200")}
                                        className={cn(active && "bg-gray-100", "sidebar-item cursor-pointer")}
                                        onClick={() => navigate("/profile")}
                                    >
                                        Your Profile
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        // className={cn(active && "bg-gray-100", "cursor-pointer rounded-sm px-4 py-2 text-gray-700 focus:bg-gray-200")}
                                        className={cn(active && "bg-gray-100", "sidebar-item cursor-pointer")}
                                        onClick={() => navigate("/settings")}
                                    >
                                        Settings
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        // className={cn(
                                        //     active && "bg-gray-100",
                                        //     "inline-flex w-full cursor-pointer rounded-sm px-4 py-2 text-gray-700 focus:bg-gray-200",
                                        // )}
                                        className={cn(active && "bg-gray-100", "sidebar-item cursor-pointer")}
                                        onClick={() => navigate("/logout")}
                                    >
                                        <span>
                                            <LogOut className="pr-1" />
                                        </span>
                                        Logout
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu> */}
            </div>
        </header>
    );
};

Header.propTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func,
};

export default Header;
