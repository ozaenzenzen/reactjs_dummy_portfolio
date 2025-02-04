import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, useLocation } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "./contexts/theme-context";
import Layout from "./routes/layout";
import DashboardPage from "./routes/dashboard/page";
import AboutMePage from "./routes/dashboard/AboutMePage";
import ProjectPage from "./routes/dashboard/ProjectPage";
import ExperiencePage from "./routes/dashboard/ExperiencePage";
import ContactPage from "./routes/dashboard/ContactPage";
import DynamicTitle from "./routes/dashboard/component/DynamicTitle";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, path: "/", element: <DashboardPage /> },
            { path: "/about", element: <AboutMePage /> },
            { path: "/project", element: <ProjectPage /> },
            { path: "/experience", element: <ExperiencePage /> },
            { path: "/contact", element: <ContactPage /> },
        ],
    },
]);

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <>
//             <Route
//                 path="/"
//                 element={<DashboardPage />}
//             ></Route>
//             <Route
//                 path="about"
//                 element={<AboutMePage />}
//             ></Route>
//             <Route
//                 path="project"
//                 element={<ProjectPage />}
//             ></Route>
//             <Route
//                 path="experience"
//                 element={<ExperiencePage />}
//             ></Route>
//             <Route
//                 path="contact"
//                 element={<ContactPage />}
//             ></Route>
//         </>,
//     ),
// );

// Wrapper component to use `useLocation`
const AppWrapper = () => {
    // const location = useLocation();

    // useEffect(() => {
    //     // Set a default title
    //     document.title = "My App";
    // }, [location]);

    return (
        <BrowserRouter>
            <ThemeProvider storageKey="theme">
                {/* <DynamicTitle /> */}
                <RouterProvider router={router} />
            </ThemeProvider>
        </BrowserRouter>
    );
};

function App() {
    // return <AppWrapper />;
    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
