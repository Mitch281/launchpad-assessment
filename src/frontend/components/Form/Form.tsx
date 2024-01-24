"use client";

import styles from "./form.module.css";

type Props = {
    children: React.ReactNode;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
};

export default function Form({ children, onSubmit }: Props) {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            {children}
        </form>
    );
}
