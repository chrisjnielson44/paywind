import Notifications from './notifications'
import AppInterface from "../../components/AppInterfaceComp";


export default async function Home() {
    return (
        <main>
            <AppInterface>
                <Notifications/>
            </AppInterface>
        </main>
    )
}