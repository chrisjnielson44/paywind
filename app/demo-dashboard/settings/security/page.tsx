
import Security from './security'
import { Nav } from '../../components/nav';


export default async function Home() {
    return (
        <main>
            <Nav/>
            <Security/>
        </main>
    )
}