"use client";

import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Form from "../Form/Form";

export default function LoginForm() {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");

    return (
        <Form onSubmit={() => {}}>
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
        </Form>
    );
}
