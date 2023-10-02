import CustomAuthenticator from './loginpage';
import { Amplify } from 'aws-amplify';
import awsconfig from '/src/aws-exports';

Amplify.configure(awsconfig);
function App() {
  return (
    <div className='h-screen bg-white dark:bg-gray-900'>
      <CustomAuthenticator />
    </div>
  );
}

export default App;