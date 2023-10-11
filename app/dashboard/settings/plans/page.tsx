
import Plans from './plans'
import AppInterface from '../../components/AppInterface'

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired ( async function Home() {
    return (
        <main>
        <AppInterface/>
        <Plans/>
    </main>
    )
}, { returnTo: '/dashboard/settings/plans'})