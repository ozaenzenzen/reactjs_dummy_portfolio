import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../layouts/sidebar";

import { useMediaQuery } from "@uidotdev/usehooks";
import { useClickOutside } from "../hooks/use-click-outside";

import { cn } from "../utils/cn";
import Header from "../layouts/header";
import { Outlet } from "react-router-dom";
import DashboardPage from "./dashboard/page";
import AboutMePage from "./dashboard/AboutMePage";
import ProjectPage from "./dashboard/ProjectPage";
import ExperiencePage from "./dashboard/ExperiencePage";
import ContactPage from "./dashboard/ContactPage";
import TestSidebar1 from "../layouts/testSidebar1";
import MobileSidebar from "../layouts/MobileSidebar";
import TestSidebar2 from "../layouts/TestSidebar2";

const Layout = () => {
    const isDesktopDevice = useMediaQuery("(min-width: 768px)");
    console.log(`isDesktopDevice: ${isDesktopDevice}`);

    const [collapsed, setCollapsed] = useState(!isDesktopDevice);
    // const [collapsed, setCollapsed] = useState(true);

    const sidebarRef = useRef(null);

    // useEffect(() => {
    //     if (isDesktopDevice) {
    //         setCollapsed(true);
    //     }
    // }, [isDesktopDevice]);

    useClickOutside([sidebarRef], () => {
        if (isDesktopDevice == false && collapsed == false) {
            setCollapsed(true);
        }
    });

    return (
        <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
            <div
                className={cn(
                    "pointer-events-none fixed inset-0 -z-10 bg-black opacity-0 transition-opacity",
                    !collapsed && "max-md:pointer-events-auto max-md:z-50 max-md:opacity-30",
                )}
            />
            {/* <MobileSidebar className="z-60" /> */}
            {/* <TestSidebar2 isOpen={false}/> */}
            {/* <TestSidebar1 /> */}
            <Sidebar
                isDesktopDevice={isDesktopDevice}
                ref={sidebarRef}
                collapsed={collapsed}
            />
            <div className={cn("transition-[margin] duration-300", collapsed ? "md:ml-[0px]" : "md:ml-[0px]")}>
                <Header
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                    isDesktopDevice={isDesktopDevice}
                />
                <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6">
                    <Outlet />
                    {/* <DashboardPage />
                    <AboutMePage />
                    <ProjectPage />
                    <ExperiencePage />
                    <ContactPage /> */}
                </div>
            </div>
        </div>
    );
};

export default Layout;
