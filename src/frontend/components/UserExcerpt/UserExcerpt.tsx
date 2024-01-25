"use client";

import { UserContext } from "@/frontend/context/UserContext";
import { DeleteUserBody } from "@/shared/types";
import { Button } from "@mui/material";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { startTransition, useContext, useState } from "react";
import deleteUser from "../../api/deleteUser";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styles from "./user-excerpt.module.css";

type Props = {
    user: User;
};

export default function UserExcerpt({ user }: Props) {
    const { userIdLoggedIn } = useContext(UserContext);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    async function invokeDeleteUser() {
        const body: DeleteUserBody = {
            userIdToDelete: user.id.toString(),
            deleterUserId: userIdLoggedIn || "",
        };
        try {
            setErrorMessage("");
            await deleteUser(body);
            // Trigger rerender.
            startTransition(() => router.refresh());
        } catch (error) {
            const deleteError = error as Error;
            setErrorMessage(deleteError.message);
        }
    }
    return (
        <div className={styles.container}>
            <span>{user.username}</span>
            <span>Is Admin: {user.isAdmin ? "Yes" : "No"}</span>
            <ErrorMessage errorMessage={errorMessage} />
            <Button
                onClick={invokeDeleteUser}
                className={styles.deleteButton}
                variant="contained"
                sx={{ position: "absolute", right: "5px" }}
            >
                X
            </Button>
        </div>
    );
}
