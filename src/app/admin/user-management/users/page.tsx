import fetchUsers from "@/frontend/api/fetchUsers";
import PageLayout from "@/frontend/components/PageLayout/PageLayout";
import UserExcerpt from "@/frontend/components/UserExcerpt/UserExcerpt";
import { FetchUserResponse } from "@/shared/types";

export default async function page() {
    // Normally, we would check if user is admin here, but since we cannot access local storage from a server component,
    // we cannot do this. In an application, using NextAuth for example, this would be different as auth is tracked on
    // server.
    const response: FetchUserResponse = await fetchUsers();
    const allUsers = response.data;
    return (
        <PageLayout>
            {allUsers?.map((user) => (
                <UserExcerpt key={user.id} user={user} />
            ))}
        </PageLayout>
    );
}
