import AppInterface from '../../components/AppInterface'
import Settings from './settings'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired ( async function Home() {
    return (
        <main>
        <AppInterface/>
        <Settings/>
    </main>
    )
}, { returnTo: '/dashboard/settings/general' })
