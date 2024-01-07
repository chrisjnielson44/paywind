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
import { MainNav } from "../components/main-nav"
import { Overview } from "../components/overview"
import { Search } from "../components/search"
import TeamSwitcher from "../components/team-switcher"
import { UserNav } from "../components/user-nav"
import { Nav } from "../components/nav"
import { PieGraph } from "../components/piechart"
import { TopCryptoPositions } from "./components/table"
import Bitcoin from "./components/bitcoin"
import { CryptoOrders } from "./components/orders"

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard app built using the components.",
}

export default function Stocks() {
    return (
        <>
            <div className="flex-col md:flex">
                <Nav />
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Crypto</h2>
                    </div>
                    <Tabs defaultValue="trade" className="space-y-4">
                        <TabsList className="grid w-fit grid-cols-2">
                            <TabsTrigger value="trade">Trade</TabsTrigger>
                            <TabsTrigger value="orders">Orders</TabsTrigger>

                        </TabsList>
                        <TabsContent value="trade" className="space-y-4">
                            <Card className="col-span-2">
                                <CardHeader>
                                    <CardTitle>Allocations</CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <h1 className="text-xl pb-5 font-medium">Your Top Coins</h1>
                                    <TopCryptoPositions/>
                                </CardContent>

                            </Card>

                            <Card className="col-span-2">
                                <CardHeader>
                                    <CardTitle>Trade</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <h1 className="text-xl pb-5 font-medium">Bitcoin (BTC)</h1>
                                    <div className="flex flex-col md:flex-row items-start md:items-center">
                                        <div className="flex-grow">
                                            <Bitcoin/>
                                        </div>
                                        <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 mt-4 md:mt-0 md:ml-4">
                                            {/* Buy Button */}
                                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                                Buy
                                            </button>
                                            {/* Sell Button */}
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                                Sell
                                            </button>
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
                                    <CryptoOrders/>
                                </CardContent>

                            </Card>

                            </TabsContent>

                    </Tabs>
                </div>
            </div>
        </>
    )
}