import fetchAllTasksByUser from "@/frontend/api/fetchAllTasksByUser";
import PageLayout from "@/frontend/components/PageLayout/PageLayout";
import Tasks from "@/frontend/components/Tasks/Tasks";
import { Task } from "@prisma/client";

export default async function Page({ params }: { params: { id: string } }) {
    const response = await fetchAllTasksByUser(params.id);
    const allTasks = response.data as Task[];
    if (allTasks.length === 0) {
        return (
            <PageLayout>
                <span>You have no Tasks!</span>
            </PageLayout>
        );
    }
    return (
        <PageLayout>
            <Tasks allTasks={allTasks as Task[]} />
        </PageLayout>
    );
}
