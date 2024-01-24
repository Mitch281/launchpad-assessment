"use client";

import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Form from "../Form/Form";

export default function SignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    return (
        <Form>
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
        </Form>
    );
}
