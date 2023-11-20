import AppInterface from '../components/AppInterface'
import Transactions from './transactions'

export default async function Home() {
    return (
        <main>
        <AppInterface/>
        <Transactions/>
    </main>
    )
}