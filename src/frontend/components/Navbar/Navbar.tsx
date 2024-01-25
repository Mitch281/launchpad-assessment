"use client";

import { UserContext } from "@/frontend/context/UserContext";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
    const router = useRouter();
    const { userIdLoggedIn, setUserIdLoggedIn, setIsAdmin } =
        useContext(UserContext);

    function logout() {
        localStorage.removeItem("userId");
        localStorage.removeItem("isAdmin");
        setUserIdLoggedIn("");
        setIsAdmin(false);
        router.push("/login");
    }

    let navbarButtonElements = <></>;
    if (userIdLoggedIn !== "") {
        navbarButtonElements = (
            <Button variant="contained" onClick={logout}>
                Logout
            </Button>
        );
    } else {
        navbarButtonElements = (
            <>
                <Button variant="contained">
                    <Link href="/login">Login</Link>
                </Button>
                <Button variant="contained">
                    <Link href="/signup">Signup</Link>
                </Button>
            </>
        );
    }

    return (
        <nav className={styles.container}>
            <span>
                {userIdLoggedIn
                    ? `Logged in as user with id ${userIdLoggedIn}`
                    : ""}
            </span>
            {navbarButtonElements}
        </nav>
    );
}
