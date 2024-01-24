import { LoginBody, SignupResponse } from "@/shared/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function signup(body: LoginBody) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        body: JSON.stringify(body),
    });
    const json: SignupResponse = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }
    return json;
}
