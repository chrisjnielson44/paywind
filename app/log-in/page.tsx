
import awsExports from '../aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure({ ...awsExports, ssr: true });


import CustomAuthenticator from './loginpage';

export default function Home() {
  return(
    <div className='h-screen bg-white dark:bg-gray-900'>
      <CustomAuthenticator/>
      </div>
  )
}