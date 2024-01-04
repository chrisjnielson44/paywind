
import Plans from './plans'
import { Nav } from '../../components/nav';
import SettingInterface from '../settingsinterface';

export default async function Home() {
    return (
        <main>
            <Nav />
            <SettingInterface />
            <Plans />
        </main>
    )
}