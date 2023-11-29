import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            phonenumber: string | null | undefined;
            userid: string | null | undefined;
            role: string | null | undefined;

        } & DefaultSession["user"]
    }

}