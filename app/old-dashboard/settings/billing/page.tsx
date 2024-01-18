
import Billing from './billing'
import AppInterface from "../../components/AppInterfaceComp";

export default async function Home() {
    return (
        <main>
            <AppInterface>
                <Billing />
            </AppInterface>
        </main>
    )
}