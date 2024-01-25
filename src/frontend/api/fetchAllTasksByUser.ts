import { FetchTasksResponse } from "@/shared/types";
import getApiUrl from "../utils/getApiUrl";

const API_URL = getApiUrl();

export default async function fetchAllTasksByUser(userId?: string) {
    let url;
    if (userId) {
        url = `${API_URL}/tasks?userId=${userId}`;
    } else {
        url = `${API_URL}/tasks`;
    }
    const response = await fetch(url, {
        cache: "no-store",
    });
    const json: FetchTasksResponse = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }
    return json;
}
