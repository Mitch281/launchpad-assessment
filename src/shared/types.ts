import { Task } from "@prisma/client";

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

export type FetchTasksResponse = {
    message: string;
    data?: Task[];
};
