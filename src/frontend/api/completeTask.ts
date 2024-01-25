import { CompleteTaskBody, CompleteTaskResponse } from "@/shared/types";
import getApiUrl from "../utils/getApiUrl";

const API_URL = getApiUrl();

export default async function completeTask(body: CompleteTaskBody) {
    const response = await fetch(`${API_URL}/complete-task`, {
        method: "PATCH",
        body: JSON.stringify(body),
    });
    const json: CompleteTaskResponse = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }

    return json;
}
