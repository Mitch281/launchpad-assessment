import { CreateTaskBody, CreateTaskResponse } from "@/shared/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function createTask(body: CreateTaskBody) {
    const response = await fetch(`${API_URL}/create-task`, {
        method: "POST",
        body: JSON.stringify(body),
    });
    const json: CreateTaskResponse = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }
    return json;
}