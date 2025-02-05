import { forwardRef } from "react";
import { Link, NavLink } from "react-router-dom";

import { navbarLinks, newMenus } from "@/constants";

import logoLight from "@/assets/logo-light.svg";
import logoDark from "@/assets/logo-dark.svg";

import { cn } from "@/utils/cn";

import PropTypes from "prop-types";

export const Sidebar = forwardRef(({ isDesktopDevice, collapsed }, ref) => {
    console.log(`collapsed: ${collapsed}`);
    return (
        <aside
            ref={ref}
            // className={cn(
            //     "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900",
            //     collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
            //     collapsed ? "max-md:-left-full" : "max-md:left-0",
            // )}
            className={
                isDesktopDevice
                    ? cn(
                          "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900",
                        //   collapsed ? "md:w-[0px] md:items-center" : "md:w-[240px]",
                        "md:w-[0px] md:items-center"
                        //   collapsed ? "max-md:-left-full" : "max-md:left-0",
                      )
                    : cn(
                          "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900",
                          collapsed ? "md:w-[0px] md:items-center" : "md:w-[240px]",
                          collapsed ? "max-md:-left-full" : "max-md:left-0",
                      )
            }
        >
            <div className="flex gap-x-3 p-3">
                <img
                    src={logoLight}
                    alt="Logoipsum"
                    className="dark:hidden"
                />
                <img
                    src={logoDark}
                    alt="Logoipsum"
                    className="hidden dark:block"
                />
                {!collapsed && <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">Fauzan's Lab</p>}
            </div>
            <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3 [scrollbar-width:_thin]">
                {/* {newMenus.map((newMenu) => (
                    <Link
                        key={newMenu.title}
                        to={newMenu.path}
                        className={cn("sidebar-group-title", collapsed && "hidden md:items-center lg:block")}
                    >
                        <p className={cn("sidebar-group-title-v2", collapsed && "md:w-[45px]", "w-full cursor-pointer p-2 text-center")}>
                            {newMenu.title}
                        </p>
                    </Link>
                ))} */}
                {newMenus.map((navbarLink) => (
                    <Link
                        key={navbarLink.title}
                        to={navbarLink.path}
                        // className={cn("sidebar-group", collapsed && "md:items-center")}
                        className={cn("sidebar-group")}
                    >
                        {/* <p className={cn("sidebar-group-title", collapsed && "md:w-[45px]")}>{navbarLink.title}</p> */}
                        <p className={cn("sidebar-group-title", collapsed && "md:w-[45px]")}>{navbarLink.title}</p>
                    </Link>
                ))}
            </div>
        </aside>
    );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
    collapsed: PropTypes.bool,
};

export default Sidebar;
