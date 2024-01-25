import { UserContext } from "@/frontend/context/UserContext";
import { TextField } from "@mui/material";
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

    function setQueryParam(
        e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
        key: string
    ) {
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

        // update as necessary
        const value = e.target.value.trim();
        if (value === "default") {
            // Delete not working?
            current.delete(key);
            return;
        }

        if (!value) {
            current.delete(key);
        } else {
            current.set(key, e.target.value);
        }

        // cast to string
        const search = current.toString();
        // or const query = `${'?'.repeat(search.length && 1)}${search}`;
        const query = search ? `?${search}` : "";

        router.push(`${pathname}${query}`);
    }

    return (
        <>
            <span>Filter:</span>
            <select onChange={(e) => setQueryParam(e, "userId")}>
                <option key="select-user" value="default">
                    Select User
                </option>
                {allUsers.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.username}
                    </option>
                ))}
            </select>
            <TextField
                variant="outlined"
                label="Title"
                onChange={(e) => setQueryParam(e, "title")}
            />
        </>
    );
};
export default TaskFiltering;
