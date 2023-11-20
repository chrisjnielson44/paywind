import { getServerSession } from "next-auth";
import AppInterface from "./components/AppInterface";
import Dashboard from "./dashboard";
import { redirect } from "next/navigation"

export default async function Home() {
  
    return (
        <main>
        <AppInterface/>
        <Dashboard/>
    </main>
    )
}

// const session = await getServerSession();
// if(session) {
//     redirect('/auth/login');
// }