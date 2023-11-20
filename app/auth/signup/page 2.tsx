import { getServerSession } from "next-auth";
import SignUp from "./signup"
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getServerSession();
    if(session) {
        redirect('/dashboard')
    }
    return(
        <div>
            <SignUp/>
        </div>
    )
}

