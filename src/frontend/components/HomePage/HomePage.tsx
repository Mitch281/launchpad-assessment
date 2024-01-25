"use client";

import { UserContext } from "@/frontend/context/UserContext";
import { useContext } from "react";
import ButtonLink from "../ButtonLink";
import styles from "./home-page.module.css";

export default function HomePage() {
    const { userIdLoggedIn, isAdmin } = useContext(UserContext);

    let content = <></>;
    if (!userIdLoggedIn) {
        content = (
            <>
                <h1>Welcome to Task Manager</h1>
                <section className={styles.linksContainer}>
                    <ButtonLink href="login" title="Login" />
                    <ButtonLink href="signup" title="Signup" />
                </section>
            </>
        );
    } else if (!isAdmin) {
        content = (
            <>
                <h1>Welcome to Task Manager</h1>
                <ButtonLink
                    href={`tasks/user/${userIdLoggedIn}`}
                    title="View Tasks"
                />
            </>
        );
    } else {
        content = (
            <>
                <h1>Welcome to Task Manager</h1>
                <ButtonLink href="admin" title="Admin Page" />
            </>
        );
    }

    return <div className={styles.container}>{content}</div>;
}
