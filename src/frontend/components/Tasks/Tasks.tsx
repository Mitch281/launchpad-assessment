"use client";

import { Task } from "@prisma/client";
import TaskExcerpt from "../TaskExcerpt/TaskExcerpt";
import styles from "./tasks.module.css";

type Props = {
    allTasks: Task[];
};

export default function Tasks({ allTasks }: Props) {
    // TODO: DO NOT RENDER TASKS IF user id doe snot match url user id.
    console.log(allTasks);
    return (
        <section className={styles.container}>
            {allTasks.map((task) => (
                <TaskExcerpt key={task.id} task={task} />
            ))}
        </section>
    );
}
