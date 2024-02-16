import Pricing from "./pricing";
import Header from "../frontpage-components/header";
import Footer from "../frontpage-components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Features page for Paywind.",
}

export default function Home() {
return(
    <div>
        <Header/>
        <Pricing/>
        <Footer/>
    </div>
)
}