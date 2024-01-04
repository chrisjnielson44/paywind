import { Nav } from '../../components/nav'
import SettingInterface from '../settingsinterface'
import Notifications from './notifications'


export default async function Home() {
    return (
        <main>
            <Nav />
            <SettingInterface />
            <Notifications />
        </main>
    )
}