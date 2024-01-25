"use client";

import createTask from "@/frontend/api/createTask";
import fetchUsers from "@/frontend/api/fetchUsers";
import SuccessMessage from "@/frontend/components/SuccessMessage/SuccessMessage";
import { UserContext } from "@/frontend/context/UserContext";
import { CreateTaskBody, Priority } from "@/shared/types";
import { Button, TextField } from "@mui/material";
import { User } from "@prisma/client";
import { useContext, useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Form from "../Form/Form";

export default function CreateTaskForm() {
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [priority, setPriority] = useState<Priority>("low");

    const { userIdLoggedIn } = useContext(UserContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        async function invokeFetchUsers() {
            try {
                const json = await fetchUsers();
                setUsers(json?.data as User[]);
            } catch (error) {
                console.log(error);
            }
        }

        invokeFetchUsers();
    }, []);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const body: CreateTaskBody = {
            newTask: {
                userId: parseInt(userId),
                title,
                description,
                dueDate: new Date(date),
                priority,
            },
            userIdOfCreator: userIdLoggedIn || "",
        };
        try {
            setIsSuccessful(false);
            await createTask(body);
            setErrorMessage("");
            setIsSuccessful(true);
        } catch (error) {
            let createTaskError = error as Error;
            setErrorMessage(createTaskError.message);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Create Task</h1>
            <label htmlFor="user">User:</label>
            <select
                id="user"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            >
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.username}
                    </option>
                ))}
            </select>
            <TextField
                variant="outlined"
                label="Title"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setTitle(e.target.value)
                }
            />
            <TextField
                variant="outlined"
                label="Description"
                value={description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setDescription(e.target.value)
                }
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="priority">Priority:</label>
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as Priority)}
            >
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
            </select>
            <Button variant="contained" type="submit">
                Create Task
            </Button>
            <ErrorMessage errorMessage={errorMessage} />
            {isSuccessful ? <SuccessMessage /> : ""}
        </Form>
    );
}
