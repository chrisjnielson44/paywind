import AppInterface from "../components/AppInterface";
import Metrics from "./spending";
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired ( async function Home() {
    return (
        <main>
        <AppInterface/>
        <Metrics/>
    </main>
    )
}, { returnTo: '/dashboard/spending' })