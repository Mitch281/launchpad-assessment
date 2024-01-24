"use client";

import createUser from "@/frontend/api/createUser";
import SuccessMessage from "@/frontend/components/SuccessMessage/SuccessMessage";
import useGetUserIdFromLocalStorage from "@/frontend/hooks/useGetUserIdFromLocalStorage";
import { CreateUserBody } from "@/shared/types";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Form from "../Form/Form";

export default function CreateUserForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [isAdmin, setIsAdmin] = useState<"no" | "yes">("no");
    const userIdOfCreator = useGetUserIdFromLocalStorage();
    const [errorMessage, setErrorMessage] = useState("");
    const [isSuccessful, setIsSuccessful] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const newUser = {
            username,
            email,
            isAdmin: isAdmin === "no" ? false : true,
        };
        const body: CreateUserBody = {
            newUser,
            userIdOfCreator: userIdOfCreator || "",
        };
        try {
            setIsSuccessful(false);
            await createUser(body);
            setErrorMessage("");
            setIsSuccessful(true);
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Create User</h1>
            <TextField
                required
                variant="outlined"
                label="Username"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUsername(e.target.value)
                }
            />
            <TextField
                required
                variant="outlined"
                label="Email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                }
            />
            <label htmlFor="is-admin-field">Is this user an admin user?</label>
            <select
                id="is-admin-field"
                value={isAdmin}
                onChange={(e) => setIsAdmin(e.target.value as "no" | "yes")}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            <Button variant="contained" type="submit">
                Create User
            </Button>
            <ErrorMessage errorMessage={errorMessage} />
            {isSuccessful ? <SuccessMessage /> : ""}
        </Form>
    );
}
