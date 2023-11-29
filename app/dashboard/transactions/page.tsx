import { AppInterface } from "../components/AppInterfaceComp";
import Transactions from './transactions'

export default async function Home() {
    return (
        <main>
            <AppInterface child={
                <Transactions />
            } />
        </main>
    )
}