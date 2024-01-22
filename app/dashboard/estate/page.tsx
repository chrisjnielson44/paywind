import { Metadata } from "next"
import Estate from "./estate"


export const metadata: Metadata = {
    title: "Estate",
}


export default function EstatePage() {

    return(
        <Estate/>
    )
}