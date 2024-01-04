'use client'
import { useState } from 'react'
import SettingInterface from '../settingsinterface'

export default function Security() {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');

    const [googleAuthEnabled, setGoogleAuthEnabled] = useState(false);
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

    const handleChangePassword = () => {
        // TODO: Logic to change the password
    }

    const handleToggleGoogleAuth = () => {
        // TODO: Logic to enable or disable Google Authenticator
        setGoogleAuthEnabled(!googleAuthEnabled);
    }

    const handleToggleTwoFactor = () => {
        // TODO: Logic to enable or disable 2FA
        setTwoFactorEnabled(!twoFactorEnabled);
    }

    return (
        <div>

            <div className='h-screen bg-white dark:bg-gray-900 '>
                <div className="mx-auto max-w-7xl pt-10 lg:flex lg:gap-x-16 lg:px-0">
                <SettingInterface/>
                    <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
                        <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">

                            <div className="p-6 bg-white shadow rounded-lg dark:bg-gray-900 dark:ring-2 dark:ring-gray-400">
                                <h2 className="text-2xl font-bold mb-4 dark:text-white">Change Password</h2>
                                <div className="space-y-4">
                                    <input
                                        type="password"
                                        placeholder="Current Password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
                                    />
                                    <input
                                        type="password"
                                        placeholder="New Password"
                                        value={newPassword}
                                        onChange={e => setNewPassword(e.target.value)}
                                        className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
                                    />
                                    <input
                                        type="password"
                                        placeholder="Confirm New Password"
                                        value={confirmationPassword}
                                        onChange={e => setConfirmationPassword(e.target.value)}
                                        className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <button
                                    onClick={handleChangePassword}
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Change Password
                                </button>
                            </div>

                            <div className="p-6 bg-white shadow rounded-lg dark:bg-gray-900 dark:ring-2 dark:ring-gray-400">
                                <h2 className="text-2xl font-bold mb-4">Google Authenticator</h2>
                                <p className="mb-4">
                                    {googleAuthEnabled ? "Google Authenticator is enabled." : "Google Authenticator is disabled."}
                                </p>
                                <button
                                    onClick={handleToggleGoogleAuth}
                                    className={`px-4 py-2 rounded ${googleAuthEnabled ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                                        } text-white`}
                                >
                                    {googleAuthEnabled ? 'Disable' : 'Enable'}
                                </button>
                            </div>

                            <div className="p-6 bg-white shadow rounded-lg dark:bg-gray-900 dark:ring-2 dark:ring-gray-400">
                                <h2 className="text-2xl font-bold mb-4">Two Factor Authentication</h2>
                                <p className="mb-4">
                                    {twoFactorEnabled ? "Two Factor Authentication is enabled." : "Two Factor Authentication is disabled."}
                                </p>
                                <button
                                    onClick={handleToggleTwoFactor}
                                    className={`px-4 py-2 rounded ${twoFactorEnabled ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                                        } text-white`}
                                >
                                    {twoFactorEnabled ? 'Disable' : 'Enable'}
                                </button>
                            </div>

                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
