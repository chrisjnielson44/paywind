import { Metadata } from "next"
import Education from "./education"


export const metadata: Metadata = {
    title: "Education",
}


export default function EducationPage() {

    return(
        <Education/>
    )
}