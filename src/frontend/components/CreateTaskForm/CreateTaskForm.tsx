"use client";

import SuccessMessage from "@/frontend/SuccessMessage/SuccessMessage";
import createTask from "@/frontend/api/createTask";
import { CreateTaskBody, Priority } from "@/shared/types";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Form from "../Form/Form";

export default function CreateTaskForm() {
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [priority, setPriority] = useState<Priority>("low");

    const [userIdOfCreator, setUserIdOfCreator] = useState<string | null>("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSuccessful, setIsSuccessful] = useState(false);

    useEffect(() => {
        setUserIdOfCreator(localStorage.getItem("userId"));
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
            userIdOfCreator: userIdOfCreator || "",
        };
        try {
            setIsSuccessful(false);
            await createTask(body);
            setErrorMessage("");
            setIsSuccessful(true);
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Create Task</h1>
            <TextField
                variant="outlined"
                label="User Id"
                value={userId}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUserId(e.target.value)
                }
            />
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
