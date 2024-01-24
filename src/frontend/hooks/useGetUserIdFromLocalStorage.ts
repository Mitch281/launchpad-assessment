import { useEffect, useState } from "react";

export default function useGetUserIdFromLocalStorage() {
    const [userId, setUserId] = useState<string | null>("");

    useEffect(() => {
        setUserId(localStorage.getItem("userId"));
    }, []);

    return userId;
}
