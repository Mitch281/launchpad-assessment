import { FetchTasksResponse } from "@/shared/types";
import getApiUrl from "../utils/getApiUrl";

const API_URL = getApiUrl();

export default async function fetchAllTasksByUser(
    userId?: string,
    title?: string
) {
    let url;
    if (userId && title) {
        url = `${API_URL}/tasks?userId=${userId}&title=${title}`;
    } else if (userId) {
        url = `${API_URL}/tasks?userId=${userId}`;
    } else if (title) {
        url = `${API_URL}/tasks?title=${title}`;
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
