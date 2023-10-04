import AppInterface from "../components/AppInterface";
import Crypto from "./crypto";
import { headers } from "next/headers";
import { withSSRContext } from "aws-amplify";
import { redirect } from "next/navigation";


async function Home() {
    const req = {
        headers: {
            cookie: headers().get("cookie"),
        },
    };

    const { Auth } = withSSRContext({ req });

    try {
        const user = await Auth.currentAuthenticatedUser();
        return (
            <main>
                <AppInterface />
                <Crypto />
            </main>
        );
    } catch (error) {
        console.log(error);
        redirect("/log-in");
    }
}


export default Home;