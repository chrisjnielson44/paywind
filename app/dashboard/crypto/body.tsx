import TopCrpyto from "./componenets/crypto"


export default function CryptoBody() {
    return (
        <main id="dashboard" className='top-0 h-screen bg-white  dark:bg-gray-900'>
            <div className="mx-auto max-w-7xl">
             <TopCrpyto/>
            </div>
        </main>
    )
}