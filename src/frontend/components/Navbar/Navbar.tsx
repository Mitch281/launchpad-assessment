"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
    const [userId, setUserId] = useState<string | null>("");

    useEffect(() => {
        setUserId(localStorage.getItem("userId"));
    }, []);

    let navbarButtonElements = <></>;
    if (userId) {
        navbarButtonElements = <Button variant="contained">Logout</Button>;
    } else {
        navbarButtonElements = (
            <>
                <Button variant="contained">
                    <Link href="login">Login</Link>
                </Button>
                <Button variant="contained">
                    <Link href="signup">Signup</Link>
                </Button>
            </>
        );
    }

    return (
        <nav className={styles.container}>
            <span>{userId ? `Logged in as user with id ${userId}` : ""}</span>
            {navbarButtonElements}
        </nav>
    );
}
