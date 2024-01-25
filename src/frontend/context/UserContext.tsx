"use client";

import React, { createContext, useState } from "react";
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
