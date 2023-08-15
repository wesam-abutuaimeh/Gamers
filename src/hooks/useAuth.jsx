import { useEffect, useReducer } from "react";
import axios from "axios";
import { ROLES } from "../constants/roles";
import { API_URL } from "../config/api";
import { AUTH_ACTIONS, END_POINTS } from "../constants/auth";

const getToken = () => { return localStorage.getItem("token") || null }
const getRole = () => { return localStorage.getItem("role") || ROLES.GUEST }


const INIT_STATE = {
    user: null,
    isAuth: false,
    token: getToken(),
    role: getRole(),
    error: null,
    isLoading: false,
    showAuthAlert: false,
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
            const token = action.payload.token || state.token || localStorage.getItem("token")
            const role = checkRole();
            localStorage.setItem("role", role);
            localStorage.setItem("token", token);
            return {
                ...state,
                isAuth: true,
                user: action.payload.user,
                token: token,
                role: role,
                isLoading: false,
            };
        case AUTH_ACTIONS.ALERT:
            return { ...state, showAuthAlert: true };
        case AUTH_ACTIONS.LOGOUT:
            localStorage.removeItem("role");
            localStorage.removeItem("token");
            return {
                user: null,
                isAuth: false,
                token: getToken(),
                role: getRole(),
                error: null,
                isLoading: false,
            }
        default:
            return state;
    }
};

const useAuth = () => {
    const [state, dispatch] = useReducer(authReducer, INIT_STATE);
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token") || state.token}`,
        },
    };

    const handleAUTHENTICATE = async (endPoint, body) => {
        try {
            dispatch({ type: AUTH_ACTIONS.SET_LOADING });
            const { data } = await axios.post(API_URL + endPoint, body);
            dispatch({ type: AUTH_ACTIONS.AUTHENTICATE, payload: data });
        } catch (error) {
            dispatch({ type: AUTH_ACTIONS.ALERT });
            dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
        } finally {
            dispatch({ type: AUTH_ACTIONS.ALERT_CLOSE });
        }
    };

    const logout = () => dispatch({ type: AUTH_ACTIONS.LOGOUT });

    const getProfileData = async () => {
        const token = localStorage.getItem('token')
        if (!token) return
        try {
            dispatch({ type: AUTH_ACTIONS.SET_LOADING });
            const { data } = await axios.get(API_URL + END_POINTS.PROFILE, config);
            dispatch({
                type: AUTH_ACTIONS.AUTHENTICATE,
                payload: data?.data || data,
            });
        } catch (error) {
            dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
        }
    };

    useEffect(() => {
        getProfileData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { ...state, handleAUTHENTICATE, logout, getProfileData };
};

export default useAuth;
