import { FetchTasksResponse } from "@/shared/types";

const API_URL = process.env.API_URL;

export default async function fetchAllTasksByUser(userId: string) {
    const response = await fetch(`${API_URL}/tasks?userId=${userId}`, {
        cache: "no-store",
    });
    const json: FetchTasksResponse = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }
    return json;
}
