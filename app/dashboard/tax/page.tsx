import { Metadata } from "next"
import Tax from "./tax"


export const metadata: Metadata = {
    title: "Tax",
}


export default function TaxPage() {

    return(
        <Tax/>
    )
}