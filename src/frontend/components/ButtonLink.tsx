import { Button } from "@mui/material";
import Link from "next/link";

type Props = {
    href: string;
    title: string;
};

export default function ButtonLink({ href, title }: Props) {
    return (
        <Button variant="contained">
            <Link href={href}>{title}</Link>
        </Button>
    );
}
