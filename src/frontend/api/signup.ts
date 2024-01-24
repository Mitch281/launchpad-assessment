import { SignupBody, SignupResponse } from "@/shared/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function signup(body: SignupBody) {
    const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        body: JSON.stringify(body),
    });
    const json: SignupResponse = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }
    localStorage.setItem("userId", (json.data?.userId as number).toString());
    return json;
}
