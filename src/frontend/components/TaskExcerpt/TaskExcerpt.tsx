import completeTask from "@/frontend/api/completeTask";
import { UserContext } from "@/frontend/context/UserContext";
import { CompleteTaskBody } from "@/shared/types";
import { Button } from "@mui/material";
import { Task } from "@prisma/client";
import { useRouter } from "next/navigation";
import { startTransition, useContext, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styles from "./task-excerpt.module.css";

type Props = {
    task: Task;
};

export default function TaskExcerpt({ task }: Props) {
    const [completeTaskErrorMessage, setCompleteTaskErrorMessage] =
        useState("");
    const { userIdLoggedIn } = useContext(UserContext);
    const router = useRouter();
    const { isAdmin } = useContext(UserContext);

    let taskClasses = styles.container;
    if (task.isComplete) {
        taskClasses += ` ${styles.completedTask}`;
    }

    async function invokeCompleteTask() {
        const body: CompleteTaskBody = {
            taskId: task.id.toString(),
            senderUserId: userIdLoggedIn || "",
        };
        setCompleteTaskErrorMessage("");
        try {
            await completeTask(body);
            startTransition(() => router.refresh());
        } catch (error) {
            let completeTaskError = error as Error;
            setCompleteTaskErrorMessage(completeTaskError.message);
        }
    }

    let completeTaskButton = <></>;
    if (!isAdmin && !task.isComplete) {
        completeTaskButton = (
            <Button variant="contained" onClick={invokeCompleteTask}>
                Complete Task
            </Button>
        );
    }

    let userIdOfTaskElement = <></>;
    if (isAdmin) {
        userIdOfTaskElement = <span>User ID: {task.userId}</span>;
    }

    return (
        <div className={taskClasses}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <span>Priority: {task.priority}</span>
            {completeTaskButton}
            {userIdOfTaskElement}
            <ErrorMessage errorMessage={completeTaskErrorMessage} />
        </div>
    );
}
