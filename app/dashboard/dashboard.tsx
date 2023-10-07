import { getSession } from '@auth0/nextjs-auth0';
import Accounts from './components/accouts';

export default async function Dashboard() {
  const session = await getSession();
  const user = (session as any).user;

  return (
    <>
      <main id="dashboard" className='top-0 bg-white dark:bg-gray-900 h-screen md:h-screen'>
        <div className='mx-auto max-w-7xl'>
          <Accounts/>
        </div>
      </main>
    </>
  )
}
