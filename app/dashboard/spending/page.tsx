import AppInterface from "../components/AppInterface";
import Metrics from "./spending";

export default async function Home() {
    return (
        <main>
        <AppInterface/>
        <Metrics/>
    </main>
    )
}