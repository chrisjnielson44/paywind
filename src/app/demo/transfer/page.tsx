import AppInterface from "../components/AppInterface";
import SendMoney from "./SendMoney"

export default function Home() {
    return(
        <main>
            <AppInterface/>
            <SendMoney/>
        </main>
    )
}