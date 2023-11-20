
import Notifications from './notifications'
import AppInterface from '../../components/AppInterface'


export default async function Home() {
    return (
        <main>
        <AppInterface/>
        <Notifications/>
    </main>
    )
}