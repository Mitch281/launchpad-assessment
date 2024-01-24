import styles from "./error-message.module.css";

type Props = {
    errorMessage: string;
};

export default function ErrorMessage({ errorMessage }: Props) {
    return <span className={styles.span}>{errorMessage}</span>;
}
