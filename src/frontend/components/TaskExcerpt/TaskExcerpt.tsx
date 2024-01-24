import { Task } from "@prisma/client";

type Props = {
    task: Task;
};

export default function TaskExcerpt({ task }: Props) {
    return (
        <div>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div>{task.description}</div>
            <div>{task.priority}</div>
        </div>
    );
}
