import { Task, User } from "@prisma/client";

// TODO: Move responses here to frontend types folder.

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
        username: string;
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

export type FetchUserResponse = {
    message: string;
    data?: User[];
};

export type DeleteUserBody = {
    userIdToDelete: string;
    deleterUserId: string;
};

export type CompleteTaskBody = {
    senderUserId: string;
    taskId: string;
};

export type CompleteTaskResponse = {
    message: string;
};
