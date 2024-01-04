
import { Nav } from '../../components/nav'
import Billing from './billing'

export default async function Home() {
    return (
        <main>
            <Nav/>
            <Billing />
        </main>
    )
}
