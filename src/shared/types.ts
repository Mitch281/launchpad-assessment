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
};

export type SignupResponse = LoginResponse;
