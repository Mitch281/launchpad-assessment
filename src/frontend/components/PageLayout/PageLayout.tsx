import styles from "./page-layout.module.css";

type Props = {
    children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
    return <main className={styles.main}>{children}</main>;
}
