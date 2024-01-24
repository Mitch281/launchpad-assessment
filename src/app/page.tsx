import PageLayout from "@/frontend/components/PageLayout/PageLayout";
import { Button } from "@mui/material";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <PageLayout>
            <h1>Welcome to Task Manager</h1>
            <section className={styles.linksContainer}>
                <Button variant="contained">
                    <Link href="login">Login</Link>
                </Button>
                <Button variant="contained">
                    <Link href="signup">Signup</Link>
                </Button>
            </section>
        </PageLayout>
    );
}
