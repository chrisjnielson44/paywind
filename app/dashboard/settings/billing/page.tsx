
import Billing from './billing'
import AppInterface from '../../components/AppInterface'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired ( async function Home() {
    return (
        <main>
        <AppInterface/>
        <Billing/>
    </main>
    )
}, { returnTo: '/dashboard/settings/billing' })