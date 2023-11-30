import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import NewAppInterface from "./newAppInterface";

interface AppInterfaceProps {
    children: React.ReactNode;
}


export const AppInterface: React.FC<AppInterfaceProps> = async ({ children }) => {
    const session = await getServerSession(authOptions);
    const profileImageUrl = session?.user?.image ?? "User not signed in"; // Ensure this is a valid string
    const userEmail = session?.user?.email ?? "User not signed in"; // Using nullish coalescing
    const userName = session?.user?.name ?? "User not signed in"; // Using nullish coalescing

    return (
        <div>
            <NewAppInterface userEmail={userEmail} userName={userName} profileImageUrl={profileImageUrl}>
                {children}
            </NewAppInterface>
        </div>
    );
}

