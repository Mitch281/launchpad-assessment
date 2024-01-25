import { FetchUserResponse } from "@/shared/types";
import getApiUrl from "../utils/getApiUrl";

const API_URL = getApiUrl();

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
