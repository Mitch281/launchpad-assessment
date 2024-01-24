export default function isAuthenticated() {
    if (typeof window === undefined) {
        throw new Error("Cannot call this function from server!");
    }

    const userIdLoggedIn = localStorage.getItem("userId");
    if (!userIdLoggedIn) {
        return false;
    }

    return true;
}
