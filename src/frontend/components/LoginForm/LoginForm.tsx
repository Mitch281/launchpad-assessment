"use client";

import login from "@/frontend/api/login";
import { UserContext } from "@/frontend/context/UserContext";
import AuthService from "@/frontend/services/AuthService";
import { LoginBody, LoginResponse } from "@/shared/types";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Form from "../Form/Form";
import styles from "./login-form.module.css";

export default function LoginForm() {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const { setUserIdLoggedIn, setIsAdmin } = useContext(UserContext);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const body: LoginBody = {
            usernameOrEmail,
        };
        try {
            const response: LoginResponse = await login(body);
            if (response.data?.isAdmin) {
                router.push("admin");
            } else {
                router.push(`/tasks/${response.data?.userId}`);
            }
            AuthService.loginUser(
                response.data!.userId.toString(),
                response.data!.isAdmin,
                setUserIdLoggedIn,
                setIsAdmin
            );
        } catch (error: unknown) {
            setErrorMessage(error.message);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <TextField
                variant="outlined"
                label="Username or Email"
                value={usernameOrEmail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUsernameOrEmail(e.target.value)
                }
            />
            <Button type="submit" variant="contained">
                Login
            </Button>
            <span>
                Don&apos;t have an account? <Link href="signup">Signup</Link>
            </span>
            <span className={styles.errorMessage}>{errorMessage}</span>
        </Form>
    );
}
