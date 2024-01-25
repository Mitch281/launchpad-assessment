"use client";

type Props = {
    error: Error;
    reset: () => void;
};

const error = ({ error, reset }: Props) => {
    return (
        <div>
            <h2>{error.message}</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
};
export default error;
