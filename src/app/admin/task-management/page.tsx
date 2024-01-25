import ButtonLink from "@/frontend/components/ButtonLink";
import PageLayout from "@/frontend/components/PageLayout/PageLayout";

export default async function Page() {
    return (
        <PageLayout>
            <ButtonLink
                href="task-management/create-task"
                title="Create Task"
            />
            <ButtonLink href="task-management/tasks" title="View Tasks" />
        </PageLayout>
    );
}
