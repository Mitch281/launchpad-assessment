"use client";

import { UserContext } from "@/frontend/context/UserContext";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
    const router = useRouter();
    const { userIdLoggedIn, setUserIdLoggedIn, setIsAdmin, usernameLoggedIn } =
        useContext(UserContext);

    function logout() {
        localStorage.removeItem("userId");
        localStorage.removeItem("isAdmin");
        setUserIdLoggedIn("");
        setIsAdmin(false);
        router.push("/login");
    }

    let navbarButtonElements = <></>;
    if (userIdLoggedIn) {
        navbarButtonElements = (
            <div className={styles.buttonsContainer}>
                <Button variant="contained" onClick={logout}>
                    Logout
                </Button>
            </div>
        );
    } else {
        navbarButtonElements = (
            <div className={styles.buttonsContainer}>
                <Button variant="contained">
                    <Link href="/login">Login</Link>
                </Button>
                <Button variant="contained">
                    <Link href="/signup">Signup</Link>
                </Button>
            </div>
        );
    }

    return (
        <nav className={styles.container}>
            <Link href="/">Home</Link>
            <span>
                {userIdLoggedIn ? `Logged in as ${usernameLoggedIn}` : ""}
            </span>
            {navbarButtonElements}
        </nav>
    );
}
