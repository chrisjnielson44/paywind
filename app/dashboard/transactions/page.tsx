import { AppInterface } from "../components/AppInterfaceComp";
import Transactions from './transactions'

export default async function Home() {
    return (
        <main>
            <AppInterface>
                <Transactions/>
            </AppInterface>
        </main>
    )
}