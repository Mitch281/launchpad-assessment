"use client";

import { UserContext } from "@/frontend/context/UserContext";
import { Button } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import styles from "./admin-dashboard.module.css";

export default function AdminDashboard() {
    const { isAdmin } = useContext(UserContext);

    if (!isAdmin) {
        return <div>Only admins can access this page.</div>;
    }

    return (
        <section className={styles.container}>
            <Button variant="contained">
                <Link href="admin/user-management">User Management</Link>
            </Button>
            <Button variant="contained">
                <Link href="admin/task-management">Task Management</Link>
            </Button>
        </section>
    );
}
