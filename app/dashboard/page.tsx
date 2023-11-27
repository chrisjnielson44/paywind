import { getServerSession } from "next-auth/next";
import AppInterface from "./components/AppInterfaceComp";

import Dashboard from "./dashboard";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"


export default function Home() {
    return (
        <main>
            <AppInterface/>
            <Dashboard />
        </main>
    );
}
