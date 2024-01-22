import { Metadata } from "next"
import Image from "next/image"
import { LineGraph } from "../components/linechart"

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

import { TopPositions } from "./components/stockallocations"
import TradingViewWidget from "./components/applestockl"
import { Orders } from "./components/orders"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { StockOption } from "./components/dropdown"
import { BTCPrice } from "../components/btc-card"
import Applestockl from "./components/applestockl"
import AppleTicker from "../components/stock-ticker"
import { AccountSummary } from "./components/account-summary"
import { TopAccounts } from "./components/accounts"
import { FullNav } from "../components/nav/full-nav"

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard app built using the components.",
}

export default function Stocks() {
    return (
        <>
            <div className="flex-col md:flex">
                <FullNav />
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Stocks</h2>
                    </div>
                    <Tabs defaultValue="trade" className="space-y-4">
                        <TabsList className="grid sm:width-full lg:w-fit grid-cols-2">
                            <TabsTrigger value="trade">Trade</TabsTrigger>
                            <TabsTrigger value="orders">Orders</TabsTrigger>

                        </TabsList>
                        <TabsContent value="trade" className="space-y-4">
                            <div className="grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
                                <Card className="col-span-2">
                                    <CardHeader>
                                        <CardTitle>Allocations</CardTitle>
                                    </CardHeader>

                                    <CardContent>
                                        <h1 className="text-xl pb-5 font-medium">Your Top Positions</h1>
                                        <TopPositions />
                                    </CardContent>
                                </Card>

                                <Card className="col-span-2">
                                    <CardHeader>
                                        <CardTitle>Accounts Summary</CardTitle>
                                    </CardHeader>

                                    <CardContent>
                                        {/* <h1 className="text-xl pb-5 font-medium">Accounts</h1> */}
                                        <h1 className="text-xl pb-5 font-medium">Accounts</h1>
                                        <TopAccounts />
                                        {/* <Button className="text-sm h-8 w-auto mt-2">Connect Account</Button> */}
                                        <h1 className="text-xl pt-5 pb-3 font-medium">Total Value</h1>
                                        <div className="pb-2">
                                            <Tabs defaultValue="7d">
                                                <TabsList className="grid w-fit grid-cols-4">
                                                    <TabsTrigger value="7d" className=" text-sm">7D</TabsTrigger>
                                                    <TabsTrigger value="1m" className=" text-sm">1M</TabsTrigger>
                                                    <TabsTrigger value="3m" className=" text-sm">3M</TabsTrigger>
                                                    <TabsTrigger value="1Y" className=" text-sm">1Y</TabsTrigger>
                                                </TabsList>
                                            </Tabs>
                                        </div>
                                        <AccountSummary />
                                    </CardContent>

                                </Card>
                            </div>

                            <Card className="col-span-2">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle>Trade</CardTitle>
                                    <Input className="w-fit" placeholder="Search Symbol..." />

                                </CardHeader>
                                <CardContent>
                                    <h1 className="px-4 md:px-0 text-xl pb-5 font-semibold">Apple Inc. (AAPL)</h1>
                                    <div className="md:flex md:flex-row items-start">
                                        {/* TradingView Widget */}
                                        <div className="flex-initial hidden lg:block">
                                            <TradingViewWidget />
                                        </div>
                                        <div className="sm:block lg:hidden px-4 pb-5">
                                            <AppleTicker />
                                        </div>

                                        {/* Buy/Sell and Market Price Dropdown */}
                                        <div className="flex flex-col ml-4 flex-grow">
                                            {/* Buy and Sell Buttons */}
                                            <div className="pb-3">
                                                <h1 className="text-lg font-semibold">Stocks/ETF</h1>
                                            </div>
                                            <div className="flex flex-grow space-x-4 mb-4 justify-center">
                                                <Button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full ">Buy</Button>
                                                <Button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full">Sell</Button>
                                            </div>

                                            {/* Market Price Dropdown */}
                                            <div>
                                                <div className="mb-1">
                                                    <Label htmlFor="numberofshares">Order Type</Label>
                                                </div>
                                                <div className="mb-2">
                                                    <StockOption />
                                                </div>
                                                <div className="mb-1">
                                                    <Label htmlFor="numberofshares">Quantity</Label>
                                                </div>
                                                <Input id="numberofshares" placeholder="Quantity" />

                                            </div>
                                        </div>
                                    </div>
                                </CardContent>

                            </Card>

                        </TabsContent>
                        <TabsContent value="orders" className="space-y-4">
                            <Card className="col-span-2">
                                <CardHeader>
                                    <CardTitle>Orders</CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <h1 className="text-xl pb-5 font-medium">Your Orders</h1>
                                    <Orders />
                                </CardContent>
                            </Card>
                        </TabsContent>

                    </Tabs>
                </div>
            </div>
        </>
    )
}