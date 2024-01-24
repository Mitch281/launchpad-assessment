export type LoginBody = {
    usernameOrEmail: string;
};

export type SignupBody = {
    username: string;
    email: string;
    isAdmin: boolean;
};

export type LoginResponse = {
    message: string;
    data?: {
        userId: number;
        isAdmin: boolean;
    };
};

export type SignupResponse = LoginResponse;

export type Priority = "low" | "medium" | "high";

export type FetchTasksResponse = {
    message: string;
    data?: {
        id: string;
        userId: string;
        priority: Priority;
    }[];
};
