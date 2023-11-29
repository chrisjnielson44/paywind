import { AppInterface } from "./components/AppInterfaceComp";
import Dashboard from "./dashboard";


export default async function Home() {
    return (
        <main>
            {/* <NewAppInterface userEmail={userEmail} userName={userName} profileImageUrl={profileImageUrl} children={<Dashboard/>}></NewAppInterface> */}
            <AppInterface child={<Dashboard></Dashboard>}/>
        </main>
    );
}
