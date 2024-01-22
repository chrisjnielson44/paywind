import { Metadata } from "next"
import Investments from "./investments"


export const metadata: Metadata = {
    title: "Investments",
    description: "Example dashboard app built using the components.",
}


export default function InvetmentPage() {

    return(
        <Investments/>
    )
}