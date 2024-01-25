"use client";

import { usePathname } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";
import { UserContextType } from "../types";

const UserContext = createContext<UserContextType>({
    userIdLoggedIn: "",
    setUserIdLoggedIn: () => {},
    usernameLoggedIn: "",
    setUsernameLoggedIn: () => {},
    isAdmin: false,
    setIsAdmin: () => {},
});

function UserContextProvider({ children }: { children: React.ReactNode }) {
    const [userIdLoggedIn, setUserIdLoggedIn] = useState("");
    const [usernameLoggedIn, setUsernameLoggedIn] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setUserIdLoggedIn(localStorage.getItem("userId") as string);
        setUsernameLoggedIn(localStorage.getItem("username") as string);
        const isAdminLocal =
            localStorage.getItem("isAdmin") === "true" ? true : false;
        setIsAdmin(isAdminLocal);
    }, [pathname]);

    return (
        <UserContext.Provider
            value={{
                userIdLoggedIn,
                setUserIdLoggedIn,
                usernameLoggedIn,
                setUsernameLoggedIn,
                isAdmin,
                setIsAdmin,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider };
