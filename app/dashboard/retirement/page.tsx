import { Metadata } from "next"
import Retirement from "./retirement"

export const metadata: Metadata = {
    title: "Retirement",
}


export default function RetirementPage() {

    return(
        <Retirement/>
    )
}