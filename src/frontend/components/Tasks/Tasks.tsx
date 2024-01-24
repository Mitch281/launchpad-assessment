import isAuthenticated from "@/frontend/utils/isAuthenticated";
import { useRouter } from "next/navigation";
import styles from "./tasks.module.css";

export default function Tasks() {
    const router = useRouter();
    if (!isAuthenticated()) {
        router.push("/login");
    }

    return <section className={styles.container}></section>;
}
