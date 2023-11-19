import AppInterface from "../components/AppInterface"
import CryptoPage from "./demopage"
// import Crypto from "./crypto"

export default function Home() {
    return(
        <main>
            <AppInterface/>
            {/* <Crypto/> */}
            <CryptoPage/>
        </main>
    )
}