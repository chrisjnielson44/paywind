import { Metadata } from "next"
import Budgeting from "./budgeting"


export const metadata: Metadata = {
    title: "Budgeting",
}


export default function BudgetingPage() {

    return(
        <Budgeting/>
    )
}