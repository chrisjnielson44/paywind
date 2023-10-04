import AppInterface from "../components/AppInterface";
import Metrics from "./spending";
import { headers } from "next/headers";
import { withSSRContext } from "aws-amplify";
import { redirect } from "next/navigation";

// export default function Home(){
//     return(
//         <main>
//             <AppInterface/>
//             <Metrics/>
//         </main>
//     )
// }


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
                <Metrics />
            </main>
        );
    } catch (error) {
        console.log(error);
        redirect("/log-in");
    }

}

export default Home;