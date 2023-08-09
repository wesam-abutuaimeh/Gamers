import { useReducer } from "react";
import axios from "axios";
import { ROLES } from "../constant/roles";
import { AUTH_API_URL } from "../config/api";
import { AUTH_ACTIONS, END_POINTS } from "../constant/auth";

const INIT_STATE = {
    user: null,
    isAuth: false,
    token: null,
    role: ROLES.GUEST,
    error: null,
    isLoading: false,
};

const authReducer = (state, action) => {
    const checkRole = () => action.payload.isAdmin ? ROLES.ADMIN : ROLES.USER;
    switch (action.type) {
        case AUTH_ACTIONS.SET_LOADING:
            return { ...state, isLoading: true };
        case AUTH_ACTIONS.SET_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        case AUTH_ACTIONS.AUTHENTICATE:
            localStorage.setItem("user", JSON.stringify(action.payload));
            localStorage.setItem("role", JSON.stringify(checkRole()));
            localStorage.setItem("token", action.payload.token || state.token);
            return {
                ...state,
                isAuth: true,
                user: action.payload.user,
                token: action.payload.token || state.token,
                role: checkRole(),
                isLoading: false,
            };
        case AUTH_ACTIONS.LOGOUT:
            ["role", "token", "user"].map((item) => {
                localStorage.removeItem(item);
                return null;
            });
            return INIT_STATE;
        default:
            return state;
    }
};

const useAuth = () => {
    const [state, dispatch] = useReducer(authReducer, INIT_STATE);
    const token = state.token || localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const handleAUTHENTICATE = async (endPoint, body) => {
        try {
            dispatch({ type: AUTH_ACTIONS.SET_LOADING });
            const { data } = await axios.post(AUTH_API_URL + endPoint, body);
            dispatch({
                type: AUTH_ACTIONS.AUTHENTICATE,
                payload: data?.data || data,
                user: data?.data || data,
            });
        } catch (error) {
            dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
        }
    };
    const logout = async (body) => {
        try {
            dispatch({ type: AUTH_ACTIONS.LOGOUT });
        } catch (error) {
            dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
        }
    };
    const getProfileData = async () => {
        try {
            dispatch({ type: AUTH_ACTIONS.SET_LOADING });
            const { data } = await axios.get(
                AUTH_API_URL + END_POINTS.PROFILE,
                config
            );
            dispatch({
                type: AUTH_ACTIONS.AUTHENTICATE,
                payload: data?.data || data,
            });
        } catch (error) {
            dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
        }
    };

    return { ...state, handleAUTHENTICATE, logout, getProfileData };
};

export default useAuth;
