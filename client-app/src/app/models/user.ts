export interface User {
    token: string;
    username: string;
    displayName: string;
    image?: string;
}

export interface UserFormValues {
    password: string;
    username?: string;
    displayName?: string;
    email: string;
}