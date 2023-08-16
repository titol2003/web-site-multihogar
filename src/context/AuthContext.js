import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const nav = useNavigate();

    const [cookies, setCookies] = useCookies(["token", "email"]);
    const [token, setToken] = useState(null);
    useEffect(() => {
        (() => {
            setToken(cookies.token);
        })();
    });

    const logout = () => {
        setCookies("token", "", { path: "/", maxAge: 0 });
        setToken(null);
        nav("/");
    };
    return (
        <AuthContext.Provider value={{ token, setCookies, logout }}>
            {children}
        </AuthContext.Provider>
    )
}