
import Plans from './plans'
import AppInterface from "../../components/AppInterfaceComp";

export default async function Home() {
    return (
        <main>
            <AppInterface>
                <Plans/>
            </AppInterface>
        </main>
    )
}