import AppInterface from "../components/AppInterface";
import SendMoney from "./SendMoney"
import { withPageAuthRequired } from '@auth0/nextjs-auth0';


export default withPageAuthRequired ( async function Home() {
  return (
    <main>
    <AppInterface/>
    <SendMoney/>
</main>
  )
}, { returnTo: '/dashboard/transfer' })