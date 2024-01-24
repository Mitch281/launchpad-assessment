"use client";

import styles from "./form.module.css";

type Props = {
    children: React.ReactNode;
};

export default function Form({ children }: Props) {
    return <form className={styles.form}>{children}</form>;
}
