export default function setCookies(userId: string, isAdmin: string) {
    document.cookie = "userId:userId;";
    document.cookie = "isAdmin:isAdmin";
}
