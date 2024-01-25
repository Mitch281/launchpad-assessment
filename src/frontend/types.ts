import { SetStateAction } from "react";

export type UserContextType = {
    userIdLoggedIn: string;
    setUserIdLoggedIn: React.Dispatch<SetStateAction<string>>;
    usernameLoggedIn: string;
    setUsernameLoggedIn: React.Dispatch<SetStateAction<string>>;
    isAdmin: boolean;
    setIsAdmin: React.Dispatch<SetStateAction<boolean>>;
};
