import { CreateTaskResponse, DeleteUserBody } from "@/shared/types";
import getApiUrl from "../utils/getApiUrl";

const API_URL = getApiUrl();

export default async function deleteUser(body: DeleteUserBody) {
    const response = await fetch(`${API_URL}/delete-user`, {
        method: "DELETE",
        body: JSON.stringify(body),
    });
    const json: CreateTaskResponse = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }
    return json;
}
