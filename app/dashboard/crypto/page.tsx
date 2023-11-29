import CryptoBody from "./body";
import { AppInterface } from "../components/AppInterfaceComp";

export default async function Home() {
    return (
        <main>
        <AppInterface child={<CryptoBody />} />
    </main>
    )
}
// Test