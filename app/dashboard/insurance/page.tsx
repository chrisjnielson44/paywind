import { Metadata } from "next"
import Insurance from "./insurance"


export const metadata: Metadata = {
    title: "Insurance",
}


export default function InsurancePage() {

    return(
        <Insurance/>
    )
}   