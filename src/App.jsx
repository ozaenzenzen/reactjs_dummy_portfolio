import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "./contexts/theme-context";
import Layout from "./routes/layout";
import DashboardPage from "./routes/dashboard/page";
import AboutMePage from "./routes/dashboard/AboutMePage";
import ProjectPage from "./routes/dashboard/ProjectPage";
import ExperiencePage from "./routes/dashboard/ExperiencePage";
import ContactPage from "./routes/dashboard/ContactPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <DashboardPage /> },
                { path: "aboutme", element: <AboutMePage /> },
                { path: "project", element: <ProjectPage /> },
                { path: "experience", element: <ExperiencePage /> },
                { path: "contact", element: <ContactPage /> },
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
