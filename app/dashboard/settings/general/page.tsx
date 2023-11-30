import {AppInterface} from "../../components/AppInterfaceComp";

import Settings from './settings'



export default async function Home() {
    return (
        <main >
        <AppInterface>
            <Settings/>
        </AppInterface>
    </main>
    )
}
