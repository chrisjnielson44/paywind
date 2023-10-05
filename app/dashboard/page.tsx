
import AppInterface from "./components/AppInterface";
import Dashboard from "./dashboard";
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired ( async function Home() {
    return (
        <main>
        <AppInterface/>
        <Dashboard/>
    </main>
    )
}, { returnTo: '/dashboard' })

