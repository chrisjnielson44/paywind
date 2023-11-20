
import Billing from './billing'
import AppInterface from '../../components/AppInterface'

export default async function Home() {
    return (
        <main>
        <AppInterface/>
        <Billing/>
    </main>
    )
}