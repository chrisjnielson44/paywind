
import Header from '../frontpage-components/header'
import Body from './Body'
import Footer from '../frontpage-components/footer'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "About page for Paywind.",
}

export default function Home() {
    return (
      <main className="">
        <Header/>
        <Body/>
        <Footer/>
      </main>
    )
  }