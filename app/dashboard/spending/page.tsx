import AppInterface from "../components/AppInterfaceComp";
import Metrics from "./spending";

export default async function Home() {
    return (
        <main>
        <AppInterface/>
        <Metrics/>
    </main>
    )
}