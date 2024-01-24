"use client";

import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import styles from "./form.module.css";

type Props = {
    type: "Login" | "Signup";
};

export default function Form({ type }: Props) {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");

    function bottomLinkElement() {
        if (type === "Login") {
            return <Link href="signup">Signup</Link>;
        }
        return <Link href="login">Login</Link>;
    }

    return (
        <form className={styles.form}>
            <h1>{type}</h1>
            <TextField
                variant="outlined"
                label="Username or Email"
                value={usernameOrEmail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUsernameOrEmail(e.target.value)
                }
            />
            <Button type="submit" variant="contained">
                {type}
            </Button>
            <span>Don&apos;t have an account? {bottomLinkElement()}</span>
        </form>
    );
}
