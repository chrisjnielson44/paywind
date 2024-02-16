import Header from "../frontpage-components/header";
import Footer from "../frontpage-components/footer";
import Features from "./features";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features",
  description: "Features page for Paywind.",
}

export default function Home() {
    return(
        <div>
            <Header/>
            <Features/>
            <Footer/>
        </div>
    )
}