import { AppInterface } from "../components/AppInterfaceComp";
import SendMoney from "./SendMoney"


export default async function Home() {
  return (
    <main>
      <AppInterface child={
        <SendMoney />

      } />
    </main>
  )
}