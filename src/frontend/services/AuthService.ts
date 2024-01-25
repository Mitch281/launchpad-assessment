import { SetStateAction } from "react";

export default class AuthService {
    public static loginUser(
        userId: string,
        username: string,
        isAdmin: boolean,
        setUserIdLoggedIn: React.Dispatch<SetStateAction<string>>,
        setUsernameLoggedIn: React.Dispatch<SetStateAction<string>>,
        setIsAdmin: React.Dispatch<SetStateAction<boolean>>
    ) {
        setUserIdLoggedIn(userId);
        setUsernameLoggedIn(username);
        setIsAdmin(isAdmin);
        localStorage.setItem("userId", userId);
        localStorage.setItem("username", username);
        localStorage.setItem("isAdmin", isAdmin.toString());
    }
}
