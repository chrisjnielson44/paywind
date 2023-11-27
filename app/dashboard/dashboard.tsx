import Accounts from './components/accouts';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

  return (
    <>
      <main id="dashboard" className='top-0 bg-white dark:bg-gray-900 h-screen md:h-screen'>
        <div className='mx-auto max-w-7xl'>
        <h1 className='pt-12 text-center text-2xl'></h1>
          <Accounts/>
        </div>
      </main>
    </>
  )
}

