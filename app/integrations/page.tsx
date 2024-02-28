import Header from "../frontpage-components/header";
import Footer from "../frontpage-components/footer";

import { Metadata } from "next"
import Integrations from "./integrations";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Integrations page for Paywind.",
}

export default function Home() {
    return(
        <div>
            <Header/>
            <Integrations/>
            <Footer/>
        </div>
    )
}