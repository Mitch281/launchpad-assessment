import fetchAllTasksByUser from "@/frontend/api/fetchAllTasksByUser";
import fetchUsers from "@/frontend/api/fetchUsers";
import PageLayout from "@/frontend/components/PageLayout/PageLayout";
import Tasks from "@/frontend/components/Tasks/Tasks";
import { Task, User } from "@prisma/client";

export default async function Page(params: {
    params: {};
    searchParams: { userId?: string };
}) {
    const allTasksResponse = await fetchAllTasksByUser(
        params.searchParams.userId
    );
    const allUsersResponse = await fetchUsers();
    const allTasks = allTasksResponse.data as Task[];
    const allUsers = allUsersResponse.data as User[];

    return (
        <PageLayout>
            <Tasks allTasks={allTasks as Task[]} allUsers={allUsers} />
        </PageLayout>
    );
}
