import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = handleAuth();


export default function Body() {
    return (
    <main className="h-screen pt-12.5 relative bg-green-500 flex justify-center items-center ">
        <h1 className="font-bold text-white text-4xl animate-fade animate-once animate-ease-in">
            Log In Page
        </h1>    
    </main>
    )
}