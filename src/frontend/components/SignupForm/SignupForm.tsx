"use client";

import signup from "@/frontend/api/signup";
import { UserContext } from "@/frontend/context/UserContext";
import AuthService from "@/frontend/services/AuthService";
import { SignupBody, SignupResponse } from "@/shared/types";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Form from "../Form/Form";
import styles from "./signup-form.module.css";

export default function SignupForm() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { setUserIdLoggedIn, setIsAdmin, setUsernameLoggedIn } =
        useContext(UserContext);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const body: SignupBody = {
            username,
            email,
            isAdmin: false,
        };
        try {
            const response: SignupResponse = await signup(body);
            AuthService.loginUser(
                response.data!.userId.toString(),
                response.data!.username,
                response.data!.isAdmin,
                setUserIdLoggedIn,
                setUsernameLoggedIn,
                setIsAdmin
            );
            router.push(`/tasks/${response.data?.userId}`);
        } catch (error: unknown) {
            setErrorMessage(error.message);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <TextField
                variant="outlined"
                label="Username"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUsername(e.target.value)
                }
            />
            <TextField
                variant="outlined"
                label="Email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                }
            />
            <Button type="submit" variant="contained">
                Signup
            </Button>
            <span>
                Already have an account? <Link href="login">Login</Link>
            </span>
            <span className={styles.errorMessage}>{errorMessage}</span>
        </Form>
    );
}
