import ButtonLink from "@/frontend/components/ButtonLink";
import PageLayout from "@/frontend/components/PageLayout/PageLayout";

export default function Page() {
    return (
        <PageLayout>
            <ButtonLink href="users" title="View Users" />
            <ButtonLink
                href="user-management/create-user"
                title="Create User"
            />
        </PageLayout>
    );
}
