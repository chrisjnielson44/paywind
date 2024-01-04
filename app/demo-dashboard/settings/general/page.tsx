

import Settings from './settings'
import { Nav } from '../../components/nav'

export default async function Home() {
    return (
        <main >
            <Nav />
            <Settings />
        </main>
    )
}
