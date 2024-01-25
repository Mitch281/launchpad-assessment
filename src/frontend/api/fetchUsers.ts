import { FetchUserResponse } from "@/shared/types";

let API_URL = "";
if (typeof window === "undefined") {
    API_URL = process.env.API_URL as string;
} else {
    API_URL = process.env.NEXT_PUBLIC_API_URL as string;
}

export default async function fetchUsers() {
    const response = await fetch(`${API_URL}/users`, {
        cache: "no-store",
    });
    const json: FetchUserResponse = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }
    return json;
}
