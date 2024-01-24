import { User } from "@prisma/client";
import styles from "./user-excerpt.module.css";

type Props = {
    user: User;
};

export default function UserExcerpt({ user }: Props) {
    return <div className={styles.container}>{user.username}</div>;
}
