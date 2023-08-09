import React from "react";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import HomePage from "../pages/HomePage";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import ErrorPage from "../pages/ErrorPage";
import { PATHS } from "./PATHS";
import UserGuard from "../components/Guards/UserGuard";
import GuestGuard from "../components/Guards/GuestGuard";
import AdminGuard from "../components/Guards/AdminGuard";

const adminPages = [
    // {
    //     path: PATHS.ADMIN.ROOT,
    //     element: Settings,
    //     children: [
    //         {
    //             path: PATHS.ADMIN.USERS,
    //             element: <h1>Users</h1>,
    //         },
    //     ],
    // },
    {
        path: "/",
        element: <AdminGuard />,
        children: [{
            path: PATHS.ADMIN.ROOT,
            element: <Settings />,
            index: true,
        }]
    }
];

const guestPages = [

    {
        path: "/",
        element: <GuestGuard />,
        children: [{

            element: <SignUp />,
            index: true,
        },
        {
            path: PATHS.Auth.SIGNIN,
            element: <SignIn />,
        },]
    }
];

const userPages = [
    {
        path: PATHS.Home,
        element: <UserGuard />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: PATHS.PROFILE,
                element: <Profile />,
            }
        ],
    },
];

export const routes = [
    ...guestPages,
    ...userPages,
    ...adminPages,
    {
        path: PATHS.NOT_FOUND["*"],
        element: <ErrorPage />,
    },
];
