import { FetchTasksResponse } from "@/shared/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function fetchAllTasksByUser(userId: number) {
    const response = await fetch(`${API_URL}/tasks?userId=${userId}`);
    const json: FetchTasksResponse = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }
    return json;
}
