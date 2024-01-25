"use client";

import { Task, User } from "@prisma/client";
import TaskExcerpt from "../TaskExcerpt/TaskExcerpt";
import TaskFiltering from "../TaskFiltering/TaskFiltering";
import styles from "./tasks.module.css";

type Props = {
    allTasks: Task[];
    allUsers?: User[];
};

export default function Tasks({ allTasks, allUsers }: Props) {
    // TODO: DO NOT RENDER TASKS IF user id doe snot match url user id.
    let allTasksElement = <></>;
    if (allTasks.length === 0) {
        allTasksElement = <span>No tasks!</span>;
    } else {
        allTasksElement = allTasks.map((task) => (
            <TaskExcerpt key={task.id} task={task} />
        ));
    }
    return (
        <section className={styles.container}>
            <h1>Tasks</h1>
            {/* We only render TaskFiltering when user is admin. We also only fetch all users when user is admin. So
            type assertion is safe here. */}
            <TaskFiltering allUsers={allUsers as User[]} />
            {allTasksElement}
        </section>
    );
}
