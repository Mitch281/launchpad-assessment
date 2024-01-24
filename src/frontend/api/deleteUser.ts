import { CreateTaskResponse, DeleteUserBody } from "@/shared/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
