import AppInterface from "../components/AppInterface";
import CryptoBody from "./body";

export default async function Home() {
    return (
        <main>
        <AppInterface />
        <CryptoBody />
    </main>
    )
}