import { Task } from "@prisma/client";
import styles from "./task-excerpt.module.css";
("");

type Props = {
    task: Task;
};

export default function TaskExcerpt({ task }: Props) {
    console.log(task);
    return (
        <div className={styles.container}>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div>{task.description}</div>
            <div>{task.priority}</div>
        </div>
    );
}
