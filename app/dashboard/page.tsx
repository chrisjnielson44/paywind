import { AppInterface } from "./components/AppInterfaceComp";
import Dashboard from "./dashboard";
import CryptoBody from "./crypto/body";

export default async function Home() {
    return (
        <main>
            {/* <NewAppInterface userEmail={userEmail} userName={userName} profileImageUrl={profileImageUrl} children={<Dashboard/>}></NewAppInterface> */}
            <AppInterface child={
            <div>
            <Dashboard></Dashboard><CryptoBody></CryptoBody>
            </div>
            }/>
        </main>
    );
}
