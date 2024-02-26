
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button"

import {
    ArrowPathIcon,
    ChevronRightIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'
import { ArrowRightIcon, Bot } from "lucide-react"
import { BoltIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/react/24/outline'
import { JSX, SVGProps } from "react"
import {  TypewriterEffectSmooth } from "@/components/ui/type-writer-effect"
import { Boxes } from "@/components/ui/background-boxes"
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Meteors } from "@/components/ui/meteors";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Separator } from "@/components/ui/separator";
// import { WavyBackground } from "@/components/ui/wavy-background";


const primaryFeatures = [
    {
        name: 'Automated Compliance',
        description: 'Reduce the burden of regulatory compliance with automated document handling and reporting.',
        href: '#',
        icon: Bot, // Update with an appropriate icon
    },
    {
        name: 'Client Data Insights',
        description: 'Access comprehensive client data analytics for personalized advice and better financial planning.',
        href: '#',
        icon: UsersIcon, // Update with an appropriate icon
    },
    {
        name: 'AI-driven Workflows',
        description: 'Streamline your daily tasks with AI-powered tools designed to optimize your advisory practice.',
        href: '#',
        icon: Cog6ToothIcon, // Update with an appropriate icon
    },

];

const testimonials = [
    {
        quote: "Paywind has revolutionized the way we approach financial planning. Its automation tools have drastically reduced our administrative workload, allowing us to focus more on strategy and client relationships.",
        name: "Alex Johnson",
        title: "Senior Financial Advisor, Quantum Financial Services",
    },
    {
        quote: "Implementing Paywind was a game-changer for our firm. The seamless integration of client data and insightful analytics has enabled us to offer personalized advice like never before.",
        name: "Samantha Lee",
        title: "Director of Advisory, Apex Wealth Management",
    },
    {
        quote: "The efficiency and accuracy Paywind brings to compliance and document management is unparalleled. It&apos;s not just a tool; it&apos;s become an essential part of our advisory practice.",
        name: "Michael Torres",
        title: "Compliance Officer, Elite Advisors Group",
    },
    {
        quote: "Thanks to Paywind, our advisors can now automate tedious tasks and spend more time doing what they do best: advising clients and driving value. It&apos;s an essential asset for any financial advisory firm looking to scale.",
        name: "Christina Ramirez",
        title: "Chief Operating Officer, Innovate Financials",
    },
    {
        quote: "Paywind&apos;s intuitive design and powerful features have made it a favorite among our team. The client-facing app has significantly improved our engagement and satisfaction rates.",
        name: "Ethan Wright",
        title: "Head of Client Relations, Prosperity Partners Wealth Management",
    },
];

const secondaryFeatures = [
    {
        name: 'Push to deploy.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced security.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Powerful API.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: Cog6ToothIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
        icon: ServerIcon,
    },
]
const stats = [
    { id: 1, name: 'Financial Advisors Using Paywind', value: '5,000+' },
    { id: 2, name: 'Hours Saved Monthly', value: '30,000+' },
    { id: 3, name: 'Client Satisfaction Increase', value: '95%' },
    { id: 4, name: 'Reduction in Compliance Errors', value: '99%' },
];

const words = [
    {
        text: "Automate",
    },
    {
        text: "Financial",
    },
    {
        text: "Advisory",
    },
    {
        text: "with",
    },
    {
        text: "Paywind.",
        className: "text-primary dark:text-green-primary",
    },
]

const content = [
    {
        title: "Collaborative Editing",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    },
    {
        title: "Real time changes",
        description:
            "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    },
    {
        title: "Version control",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you&apos;re always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
    {
        title: "Running out of content",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you&apos;re always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
];


export default function Body() {


    return (
        <main className="bg-background dark:bg-background z-40">

            <section>
                <div className="relative pt-10 h-[40rem] flex items-center justify-center bg-dot-green-500/70 dark:bg-dot-white/10">
                    <div className="py-20 sm:py-15 lg:pb-40">
                       <div className="flex justify-center items-center">
                  
                        </div>
                         <TypewriterEffectSmooth words={words}/>
                        <div className="mx-auto max-w-7xl xl:max-screen-2xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">

                                <p className="mt-10 text-2xl leading-8 text-black dark:text-zinc-100">
                                    Simplify your workflow with Paywind. Our fintech tool automates tedious compliance and paperwork,
                                    offers critical client data at your fingertips, and integrates AI to streamline workflows for
                                    financial advisors.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <Button className="bg-primary text-white">See How It Works</Button>
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* <BackgroundBeams /> */}

                </div>
            </section>

            <section>
                <div className="mx-auto max-w-7xl xl:max-w-screen-xl px-6 sm:py-16 lg:px-8 rounded-lg">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="left"
                        speed="slow"
                        className="max-w-7xl mx-auto"
                    />
                </div>

            </section>

            {/* <StickyScroll content={content} /> */}

            {/* Logo cloud */}
            {/* <div className="mx-auto max-w-7xl xl:max-w-screen-xl px-6 sm:py-16 lg:px-8 rounded-lg">
                <h2 className="text-center text-3xl font-semibold leading-8 text-black dark:text-white">
                    Trusted by Firms
                </h2>
                <div className="bg-primary py-10 rounded-xl mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                        alt="Transistor"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                        alt="Reform"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                        alt="Tuple"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                        alt="SavvyCal"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                        alt="Statamic"
                        width={158}
                        height={48}
                    />
                </div>
            </div> */}

            {/* Feature section */}
            <div className="mx-auto mt-32 max-w-7xl xl:max-w-screen-xl px-6 sm:mt-56 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Empower Your Advisory</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                        Tools and Insights for Modern Financial Advisors
                    </p>
                    <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-100">
                        Paywind automates the most time-consuming aspects of your work, from compliance to client management,
                        enabling you to focus on delivering high-quality advice.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {primaryFeatures.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-black dark:text-white">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-zinc-700 dark:text-zinc-100">
                                    <p className="flex-auto">{feature.description}</p>
                                    <p className="mt-6">
                                        <a href={feature.href} className="text-sm font-semibold leading-6 text-primary">
                                            Learn more <span aria-hidden="true">→</span>
                                        </a>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>


            {/* Stats */}
            <div className="mx-auto mt-32 max-w-7xl xl:max-w-screen-xl px-6 sm:mt-56 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <h2 className="text-base font-semibold leading-8 text-primary">Proven Impact</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                        Empowering Financial Advisors Globally
                    </p>
                    <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-100">
                        Discover how Paywind is revolutionizing financial advisory services through automation, insight, and innovation.
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-black dark:text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col gap-y-3 border-l dark:border-white/10 border-black/10 pl-6">
                            <dt className="text-sm leading-6">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div className="bg-background">
                <div className="mx-auto max-w-screen-xl py-24 sm:py-32 ">
                    <div className="relative isolate overflow-hidden bg-background px-6 pt-16 md:pt-24 lg:flex lg:gap-x-20 ">
                        {/* <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#7775D6" />
                                    <stop offset={1} stopColor="#E935C1" />
                                </radialGradient>
                            </defs>
                        </svg> */}
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                                Simplify Your Advisory Practice
                                <br />
                                With Paywind
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-100">
                                Embrace the future of financial advising with automated compliance, streamlined workflows, and enhanced client insights. Paywind transforms your practice, so you can focus on what matters most—your clients.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <Button asChild className="text-white">
                                    <Link href="/">Get Started</Link>
                                </Button>
                                <Button asChild className="text-black dark:text-white font-semibold leading-6 gap-x-1" variant={"outline"}>
                                    <Link href="/features"> Learn More <span aria-hidden="true">→</span> </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <img
                                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                src="/dashboard.png"
                                alt="Paywind dashboard screenshot"
                                width={1824}
                                height={1080}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10"></div>


        </main>
    )
}