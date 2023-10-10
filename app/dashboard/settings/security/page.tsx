
import Security from './security'
import AppInterface from '../../components/AppInterface'

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired ( async function Home() {
    return (
        <main>
        <AppInterface/>
        <Security/>
    </main>
    )
}, { returnTo: '/dashboard/settings/security' })