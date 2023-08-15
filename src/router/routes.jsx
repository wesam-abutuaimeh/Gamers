import React, { lazy } from "react";
import { PATHS } from "./PATHS";
import UserGuard from "../components/Guards/UserGuard";
import GuestGuard from "../components/Guards/GuestGuard";
import AdminGuard from "../components/Guards/AdminGuard";
const SignIn = lazy(() => import("../pages/SignIn"))
const SignUp = lazy(() => import("../pages/SignUp"));
const HomePage = lazy(() => import("../pages/HomePage"));
const Profile = lazy(() => import("../pages/Profile"));
const Settings = lazy(() => import("../pages/Settings"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

const adminPages = [
    {
        path: "/",
        element: <AdminGuard />,
        children: [{
            path: PATHS.Home,
            element: <HomePage />,
            index: true,
        },
        {
            path: PATHS.ADMIN,
            element: <Settings />,
        },
        ]
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
            },
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
