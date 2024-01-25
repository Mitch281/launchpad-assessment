import { CreateTaskResponse, CreateUserBody } from "@/shared/types";
import getApiUrl from "../utils/getApiUrl";

const API_URL = getApiUrl();

export default async function createUser(body: CreateUserBody) {
    const response = await fetch(`${API_URL}/create-user`, {
        method: "POST",
        body: JSON.stringify(body),
    });
    const json: CreateTaskResponse = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }
    return json;
}
