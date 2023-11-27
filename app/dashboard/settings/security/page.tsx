
import Security from './security'
import AppInterface from "../../components/AppInterfaceComp";


export default async function Home() {
    return (
        <main>
        <AppInterface/>
        <Security/>
    </main>
    )
}