import AppInterface from '../components/AppInterface'
import Transactions from './transactions'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired ( async function Home() {
    return (
        <main>
        <AppInterface/>
        <Transactions/>
    </main>
    )
}, { returnTo: '/dashboard/transactions' })