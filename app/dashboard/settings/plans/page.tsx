
import Plans from './plans'
import { AppInterface } from "../../components/AppInterfaceComp";

export default async function Home() {
    return (
        <main>
            <AppInterface child={
            <Plans />
            } />
        </main>
    )
}