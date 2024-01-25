import { UserContext } from "@/frontend/context/UserContext";
import { User } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useContext } from "react";

type Props = {
    allUsers: User[];
};

const TaskFiltering = ({ allUsers }: Props) => {
    const { isAdmin } = useContext(UserContext);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    if (!isAdmin) {
        return <></>;
    }

    function setQueryParam(e: ChangeEvent<HTMLSelectElement>) {
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

        // update as necessary
        const value = e.target.value.trim();

        if (!value) {
            current.delete("userId");
        } else {
            current.set("userId", e.target.value);
        }

        // cast to string
        const search = current.toString();
        // or const query = `${'?'.repeat(search.length && 1)}${search}`;
        const query = search ? `?${search}` : "";

        router.push(`${pathname}${query}`);
    }

    return (
        <select onChange={setQueryParam}>
            {allUsers.map((user) => (
                <option key={user.id} value={user.id}>
                    {user.username}
                </option>
            ))}
        </select>
    );
};
export default TaskFiltering;
