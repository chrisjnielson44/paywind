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
import { BanknoteIcon, CandlestickChart, CandlestickChartIcon, CoinsIcon, CreditCardIcon, DollarSign, InfoIcon, LandmarkIcon, LineChart, LineChartIcon, NewspaperIcon, Percent, PieChart, PieChartIcon, PiggyBankIcon, PlusCircleIcon, PlusIcon, Wallet } from "lucide-react"
import { Accounts } from "./components/combo-box"
import { AppleTicker } from "./components/stock-ticker"
import SP500Card from "./components/spindex"
import { BTCPrice, ETHPrice } from "./components/btc-card"
import { StudentLoans1, StudentLoans2 } from "./components/studentloan"
import { UpcomingSubscriptions } from "./components/subscriptions"
import { SelectDashboard } from "./components/select-dahboard"

import CreditScoreGauge from "./components/creditscore"
import { Button } from "@/components/ui/button"
import { DatePickerWithRange } from "./date-picker"
import { TeslaTicker } from "./components/stock-ticker"


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
                        <div>
                        <Button variant="outline">Open</Button>
                         <SelectDashboard />
                            
                        </div>
                        
                    </div>
                    <Tabs defaultValue="overview" className="space-y-4">
                        <TabsContent value="overview" className="space-y-4">
                            <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-8 xl:grid-cols-8">
                                <Card className="col-span-1">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-md  font-medium">
                                           Paywind Balance
                                        </CardTitle>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="h-4 w-4 fill-currentColor"
                                        >
                                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent className="justify-center ">
                                        <div className="text-md md:text-lg lg:text-xl font-bold">$45,231.89</div>
                                        <p className="text-xs fill-currentColor">
                                            +20.1% from last month
                                        </p>
                                    </CardContent>
                                </Card>
                                {/* <Card className="col-span-1">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-md  font-medium">
                                            Chase Checking
                                        </CardTitle>
                                        <LandmarkIcon className="h-4 w-4 fill-currentColor" />
                                    </CardHeader>
                                    <CardContent className="justify-center ">
                                        <div className="text-2xl font-bold">$10,734.89</div>
                                    </CardContent>
                                </Card>
                                <Card className="col-span-1">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-md  font-medium">
                                            Truist Savings
                                        </CardTitle>
                                        <LandmarkIcon className="h-4 w-4 fill-currentColor" />
                                    </CardHeader>
                                    <CardContent className="justify-center ">
                                        <div className="text-2xl font-bold">$30,500.00</div>
                                    </CardContent>
                                </Card> */}
                                <Card className="col-span-1">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-md  font-medium">
                                            Apple Inc.
                                        </CardTitle>
                                        <CandlestickChartIcon className="h-4 w-4 fill-currentColor" />
                                    </CardHeader>
                                    <CardContent>
                                        <AppleTicker />
                                    </CardContent>
                                </Card>

                                <Card className="col-span-1">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-md  font-medium">
                                            Tesla Inc.
                                        </CardTitle>
                                        <CandlestickChartIcon className="h-4 w-4 fill-currentColor" />
                                    </CardHeader>
                                    <CardContent>
                                        <TeslaTicker />
                                    </CardContent>
                                </Card>
                                <Card className="col-span-1">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-md  font-medium">
                                            Bitcoin (BTC)
                                        </CardTitle>
                                        <CoinsIcon className="h-4 w-4 fill-currentColor" />
                                    </CardHeader>
                                    <CardContent>
                                        <BTCPrice />
                                    </CardContent>
                                </Card>

                                <Card className="col-span-1">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-md  font-medium">
                                            Etherium (ETH)
                                        </CardTitle>
                                        <CoinsIcon className="h-4 w-4 fill-currentColor" />
                                    </CardHeader>
                                    <CardContent>
                                        <ETHPrice />
                                    </CardContent>
                                </Card>

                                <Card className="col-span-1">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-md font-medium">
                                            S&P 500
                                        </CardTitle>
                                        <CandlestickChartIcon className="h-4 w-4 fill-currentColor" />
                                    </CardHeader>
                                    <CardContent>
                                        <SP500Card />
                                    </CardContent>
                                </Card>
                                <Card className="col-span-2">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0">
                                            <CardTitle className="text-md font-medium">Budgeting</CardTitle>
                                            <BanknoteIcon className="h-4 w-4 fill-currentColor" />
                                    </CardHeader>
                                    <CardContent>
                                            <div>
                                                <h1 className="text-sm font-semibold pb-2">Car Payment</h1>
                                                <StudentLoans1 />
                                                <p className="text-sm pt-2 font-light">$12,000 out of $20,000</p>
                                            </div>
                                        
                                    </CardContent>
                                </Card>

                            </div>

                            <div className="grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">

                                <Card className="col-span-2">
                                    <CardHeader>
                                        <div className="flex flex-row items-center justify-between space-y-0">

                                            <CardTitle>Portfolio</CardTitle>
                                            <PieChartIcon className="h-4 w-4 fill-currentColor" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pl-2">
                                        <PieGraph />
                                    </CardContent>
                                </Card>

                                <Card className="col-span-2">
                                    <CardHeader>
                                        <div className="flex flex-row items-center justify-between space-y-0">

                                            <CardTitle>Performance</CardTitle>
                                            
                                            <LineChartIcon className="h-4 w-4 fill-currentColor" />
                                        </div>
                                        <CardDescription>
                                            Past 30 Days
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pl-2">
                                        <LineGraph />
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">


                                <Card className="col-span-1 md:col-span-2">
                                    <CardHeader>
                                        <div className="flex flex-row items-center justify-between space-y-0">

                                            <CardTitle>Spending</CardTitle>
                                            <DollarSign className="h-4 w-4 fill-currentColor" />
                                        </div>
                                        <div className="pt-2">
                                            <DatePickerWithRange />
                                        </div>
                                    </CardHeader>

                                    <CardContent className="pl-2">
                                        <Overview />
                                    </CardContent>
                                </Card>


                                <Card className="col-span-1">
                                    <CardHeader>
                                        <div className="flex flex-row items-center justify-between space-y-0">

                                            <CardTitle>Recent Transactions</CardTitle>
                                            <Wallet className="h-4 w-4 fill-currentColor" />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="pb-2">
                                            <Accounts />
                                        </div>
                                        <PlaidTransactions />
                                    </CardContent>
                                </Card>


                                <Card className="col-span-1">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0">
                                        <CardTitle>Financial News</CardTitle>
                                        <NewspaperIcon className="h-4 w-4 " />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-5">
                                            <div>
                                                <h1 className="font-bold pb-1 hover:underline">Innovative Start-Up Disrupts Market</h1>
                                                <p>Paywind revolutionizes the way people do finance...</p>
                                            </div>
                                            <div>
                                                <h1 className="font-bold pb-1 hover:underline">Tech Giants Merge</h1>
                                                <p className="font-light">Apple and Microsoft merge to create the worlds largest tech company...</p>
                                            </div>
                                            <div>
                                                <h1 className="font-bold pb-1 hover:underline">Cryptocurrency Breakthrough</h1>
                                                <p>Bitcoin is now accepted at all major retailers...</p>
                                            </div>
                                            <div>
                                                <h1 className="font-bold pb-1 hover:underline">Tech Company Reports Record Profits</h1>
                                                <p>A leading technology company announces record-breaking quarterly profits...</p>
                                            </div>
                                            <div>
                                                <h1 className="font-bold pb-1 hover:underline">New Investment Opportunity in Renewable Energy</h1>
                                                <p>Investors flock to renewable energy projects as governments increase support...</p>
                                            </div>

                                        </div>
                                    </CardContent>
                                </Card>

                            </div>
                            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
                                <Card className="col-span-1">
                                    <CardHeader>
                                        <div className="flex flex-row items-center justify-between space-y-0">
                                            <CardTitle>Student Loans</CardTitle>
                                            <BanknoteIcon className="h-4 w-4 text-white" />
                                        </div>
                                        <CardDescription>Loan Balances</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-5">
                                            <div>
                                                <h1 className="text-lg font-semibold pb-2">Subsidized Loan 1</h1>
                                                <StudentLoans1 />
                                                <p className="text-sm pt-2 font-light">$16,000 out of $20,000</p>
                                            </div>
                                            <div>
                                                <h1 className="text-lg font-semibold pb-2">Unsubsidized Loan 2</h1>
                                                <StudentLoans2></StudentLoans2>
                                                <p className="text-sm pt-2 font-light">$4,000 out of $18,000</p>

                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="col-span-1 md:col-span-2">
                                    <CardHeader>
                                        <div className="flex flex-row items-center justify-between space-y-0">

                                            <CardTitle>Upcoming Subscriptions</CardTitle>
                                            <Wallet className="h-4 w-4 fill-currentColor" />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <UpcomingSubscriptions />
                                    </CardContent>
                                </Card>

                                <Card className="col-span-1">
                                    <CardHeader>
                                        <div className="flex flex-row items-center justify-between space-y-0">

                                            <CardTitle>Credit Score</CardTitle>
                                            <CreditCardIcon className="h-4 w-4 fill-currentColor" />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CreditScoreGauge score={720} maxScore={1000} />
                                        <p className="text-xl pt-1 font-bold text-center">Score: 720</p>
                                    </CardContent>
                                </Card>

                                <Card className="col-span-1">
                                    <CardHeader>
                                        <div className="flex flex-row items-center justify-between space-y-0">

                                            <CardTitle>Recommendations for You</CardTitle>
                                            <InfoIcon className="h-4 w-4 fill-currentColor" />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div>
                                            <div className="spay-y-4 mb-5">
                                                <p className="text-sm md:text-md pb-1">We&apos;ve noticed that you have a large sum of money in your traditional savings account.</p>
                                                <p className="pb-3">Consider moving your funds to a high-yield savings account to earn more interest.</p>
                                                <ul className="list-disc ml-3">
                                                    <li>Higher interest rates than regular savings</li>
                                                    <li>Easy access to your funds</li>
                                                    <li>Safe and secure way to grow your savings</li>
                                                </ul>
                                            </div>

                                            <Button>
                                                Apply for High-Yield Savings Account
                                            </Button>
                                        </div>
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