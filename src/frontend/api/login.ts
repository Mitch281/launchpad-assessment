import { LoginBody, LoginResponse } from "@/shared/types";
import getApiUrl from "../utils/getApiUrl";

const API_URL = getApiUrl();

export default async function signup(body: LoginBody) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        body: JSON.stringify(body),
    });
    const json: LoginResponse = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }
    localStorage.setItem("userId", (json.data?.userId as number).toString());
    localStorage.setItem("isAdmin", (json.data?.isAdmin as boolean).toString());
    return json;
}
