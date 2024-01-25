import { Task } from "@prisma/client";
import styles from "./task-excerpt.module.css";

type Props = {
    task: Task;
};

export default function TaskExcerpt({ task }: Props) {
    return (
        <div className={styles.container}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <span>Priority: {task.priority}</span>
        </div>
    );
}
