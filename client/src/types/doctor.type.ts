import type { User } from "./user.type";

export type IDoctor = {
    user: User;
    bio: string | null;
    phone: string | number | null;
};
