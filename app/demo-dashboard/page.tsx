import { Metadata } from "next"
import Image from "next/image"
import { LineGraph } from "./components/linechart"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { MainNav } from "./components/main-nav"
import { Overview } from "./components/overview"
import { PlaidTransactions } from "./components/recent-sales"
import { Search } from "./components/search"
import TeamSwitcher from "./components/team-switcher"
import { UserNav } from "./components/user-nav"
import { Nav } from "./components/nav"
import { PieGraph } from "./components/piechart"
import { CoinsIcon, LineChart, Percent, PlusCircleIcon, PlusIcon } from "lucide-react"
import { Accounts } from "./components/combo-box"
import StockTicker from "./components/stock-ticker"
import SP500Card from "./components/spindex"
import BitcoinPrice from "./components/btc-card"


export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {


    return (
        <>
            <div className="flex-col md:flex">
                <Nav />
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                    </div>
                    <Tabs defaultValue="overview" className="space-y-4">
                        <TabsContent value="overview" className="space-y-4">
                            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Balance
                                        </CardTitle>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="h-4 w-4 text-primary"
                                        >
                                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">$45,231.89</div>
                                        <p className="text-xs text-green-500">
                                            +20.1% from last month
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Tesla Inc.
                                        </CardTitle>
                                        <LineChart className="h-4 w-4 text-green-500"/>
                                    </CardHeader>
                                    <CardContent>
                                        <StockTicker />
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Bitcoin (BTC)
                                        </CardTitle>
                                        <CoinsIcon className="h-4 w-4 text-yellow-500"/>
                                    </CardHeader>
                                    <CardContent>
                                        <BitcoinPrice />
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            S&P 500
                                        </CardTitle>
                                        <LineChart className="h-4 w-4 text-muted-foreground"/>
                                    </CardHeader>
                                    <CardContent>
                                        <SP500Card />
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4">

                                <Card className="col-span-2">
                                    <CardHeader>
                                        <CardTitle>Portfolio</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pl-2">
                                        <PieGraph />
                                    </CardContent>
                                </Card>

                                <Card className="col-span-2">
                                    <CardHeader>
                                        <CardTitle>Preformance</CardTitle>
                                        <CardDescription>
                                            Past 30 Days
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pl-2">
                                        <LineGraph />
                                    </CardContent>
                                </Card>

                                <Card className="col-span-2">
                                    <CardHeader>
                                        <CardTitle>Spending</CardTitle>
                                        <CardDescription>
                                           Year: 2023
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pl-2">
                                        <Overview />
                                    </CardContent>
                                </Card>


                                <Card className="col-span-2">
                                    <CardHeader>
                                        <CardTitle>Recent Transactions</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="pb-2">
                                            <Accounts />
                                        </div>
                                        <PlaidTransactions />
                                    </CardContent>
                                </Card>



                            </div>
                            <button
                                type="button"
                                className="bg-white dark:bg-card relative block w-full rounded-lg border-2 border-dashed border-gray-400 dark:border-zinc-600 p-12 text-center hover:border-gray-400 focus:border-none  focus:ring-offset-2"
                            >
                                <PlusIcon className="mx-auto h-12 w-12 dark:text-white" />

                                <span className="mt-2 block text-sm  dark:text-white">Add Widget</span>
                            </button>


                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}