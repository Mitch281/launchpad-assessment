import { LoginBody, LoginResponse } from "@/shared/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
    return json;
}
