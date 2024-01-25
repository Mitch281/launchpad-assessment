import { SetStateAction } from "react";

export default class AuthService {
    public static loginUser(
        userId: string,
        isAdmin: boolean,
        setUserIdLoggedIn: React.Dispatch<SetStateAction<string>>,
        setIsAdmin: React.Dispatch<SetStateAction<boolean>>
    ) {
        setUserIdLoggedIn(userId);
        setIsAdmin(isAdmin);
        localStorage.setItem("userId", userId);
        localStorage.setItem("isAdmin", isAdmin.toString());
    }
}
