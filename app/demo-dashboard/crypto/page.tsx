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
import { RecentSales } from "../components/recent-sales"
import { Search } from "../components/search"
import TeamSwitcher from "../components/team-switcher"
import { UserNav } from "../components/user-nav"
import { Nav } from "../components/nav"
import { PieGraph } from "../components/piechart"

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard app built using the components.",
}

export default function Crypto() {
    return (
        <>
            <div className="flex-col md:flex">
                <Nav />
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Crypto</h2>
                    </div>
                    <Tabs defaultValue="commonstock" className="space-y-4">
                        <TabsList className="grid w-fit grid-cols-4">
                            <TabsTrigger value="commonstock">Common Stock</TabsTrigger>
                            <TabsTrigger value="indexfunds">Index Funds</TabsTrigger>
                            <TabsTrigger value="mutualfunds">Mutual Funds</TabsTrigger>
                            <TabsTrigger value="futures">Futures</TabsTrigger>

                        </TabsList>
                        <TabsContent value="commonstock" className="space-y-4">
                            <Card className="">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Balance
                                    </CardTitle>
                                    {/* <svg
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
                                    </svg> */}
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">$45,231.89</div>
                                    <p className="text-xs text-muted-foreground">
                                        +20.1% from last month
                                    </p>
                                </CardContent>
                            </Card>

                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}