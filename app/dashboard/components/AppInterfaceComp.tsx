import { getServerSession } from "next-auth/next";
import AppInterface from "./AppInterface";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"


export default async function Home() {
    const session = await getServerSession(authOptions);
    const profileImageUrl = session?.user?.image ?? "User not signed in"; // Ensure this is a valid string
    const userEmail = session?.user?.email ?? "User not signed in"; // Using nullish coalescing
    const userName = session?.user?.name ?? "User not signed in"; // Using nullish coalescing

    return (
        <div>
            <AppInterface
                userEmail={userEmail}
                userName={userName}
                profileImageUrl={profileImageUrl}
            />
        </div>
    );
}
