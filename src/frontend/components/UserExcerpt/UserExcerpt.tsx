"use client";

import { UserContext } from "@/frontend/context/UserContext";
import { DeleteUserBody } from "@/shared/types";
import { Button } from "@mui/material";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { startTransition, useContext } from "react";
import deleteUser from "../../api/deleteUser";
import styles from "./user-excerpt.module.css";

type Props = {
    user: User;
};

export default function UserExcerpt({ user }: Props) {
    const { userIdLoggedIn } = useContext(UserContext);
    const router = useRouter();

    async function invokeDeleteUser() {
        const body: DeleteUserBody = {
            userIdToDelete: user.id.toString(),
            deleterUserId: userIdLoggedIn || "",
        };
        try {
            await deleteUser(body);
            // Trigger rerender.
            startTransition(() => router.refresh());
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={styles.container}>
            {user.username}
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
