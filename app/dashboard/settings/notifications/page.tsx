
import Notifications from './notifications'
import AppInterface from '../../components/AppInterface'

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired ( async function Home() {
    return (
        <main>
        <AppInterface/>
        <Notifications/>
    </main>
    )
}, { returnTo: '/dashboard/settings/notifications' })