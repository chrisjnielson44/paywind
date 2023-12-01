import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            first_name: string | null | undefined;
            last_name: string | null | undefined;
            phonenumber: string | null | undefined;
            userid: string | null | undefined;
            role: string | null | undefined;

        } & DefaultSession["user"]
    }

}