import AppInterface from '../components/AppInterface-2'
import Settings from './settings'

export default function Home() {
    return(
        <main className='bg-white'>
            <AppInterface/>
            <Settings/>
        </main>
    )
}