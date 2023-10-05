import AppInterface from "../components/AppInterface";
import Crypto from "./crypto";

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired ( async function Home() {
    return (
        <main>
        <AppInterface />
        <Crypto />
    </main>
    )
}, { returnTo: '/dashboard/crypto' })