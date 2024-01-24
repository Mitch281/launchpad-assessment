export type LoginBody = {
    usernameOrEmail: string;
};

export type SignupBody = LoginBody;

export type LoginResponse = {
    message: string;
};

export type SignupResponse = LoginResponse;
