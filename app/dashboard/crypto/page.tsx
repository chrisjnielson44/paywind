import AppInterface from "../components/AppInterface";
import CryptoBody from "./body";
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired ( async function Home() {
    return (
        <main>
        <AppInterface />
        <CryptoBody />
    </main>
    )
}, { returnTo: '/dashboard/crypto' })