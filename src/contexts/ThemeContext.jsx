import { createContext, useContext, useEffect, useState } from "react";
import { THEMES } from "../constants/themes";

const ThemeContext = createContext(null);
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState(() => localStorage.getItem("themeMode") || THEMES.LIGHT);
    const toggleMode = () => setThemeMode((prevState) => prevState === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
    useEffect(() => {
        localStorage.setItem("themeMode", themeMode);
    }, [themeMode])
    return (
        <ThemeContext.Provider value={{ themeMode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
