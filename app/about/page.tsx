import Header from '../frontpage-components/header'
import Body from './Body'
import Footer from '../frontpage-components/footer'

export default function Home() {
    return (
      <main className="">
        <div className='top-0'>
        <Header/>
      </div>
        
        <Body/>
        <Footer/>
      </main>
    )
  }