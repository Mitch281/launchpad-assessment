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

export type Priority = "low" | "medium" | "high";

export type CreateTaskBody = {
    newTask: {
        userId: number;
        title: string;
        description: string;
        priority: Priority;
        dueDate: Date;
    };
    userIdOfCreator: string;
};

export type CreateTaskResponse = {
    message: string;
    task: Task;
};

export type CreateUserBody = {
    newUser: SignupBody;
    userIdOfCreator: string;
};
