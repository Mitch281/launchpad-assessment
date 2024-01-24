import fetchAllTasksByUser from "@/frontend/api/fetchAllTasksByUser";
import Tasks from "@/frontend/components/Tasks/Tasks";
import { Task } from "@prisma/client";

export default async function Page({ params }: { params: { userId: string } }) {
    const response = await fetchAllTasksByUser(params.userId);
    const allTasks = response.data;
    return <Tasks allTasks={allTasks as Task[]} />;
}
