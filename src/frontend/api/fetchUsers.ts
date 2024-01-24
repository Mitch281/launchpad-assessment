const API_URL = process.env.API_URL;

export default async function fetchUsers() {
    const response = await fetch(`${API_URL}/users`, {
        cache: "no-store",
    });
    const json = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }
    return json;
}
