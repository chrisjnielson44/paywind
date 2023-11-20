
import Security from './security'
import AppInterface from '../../components/AppInterface'


export default async function Home() {
    return (
        <main>
        <AppInterface/>
        <Security/>
    </main>
    )
}