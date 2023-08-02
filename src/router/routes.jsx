import { PATHS } from "./PATHS"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

export const routes = [
    {
        path: PATHS.Auth.SIGNIN,
        element: <SignIn />,
    },
    {
        path: PATHS.Auth.SIGNUP,
        element: <SignUp />,
    }
]
