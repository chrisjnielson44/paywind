import AppInterface from "./components/AppInterfaceComp";
import Dashboard from "./dashboard";

export default function Home() {
    return (
        <main>
            <AppInterface/>
            <Dashboard />
        </main>
    );
}
