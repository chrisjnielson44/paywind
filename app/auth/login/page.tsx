import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import lottie from "lottie-web";
import { useEffect } from "react";
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Login from "./login"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient";
// import LottieAnimation from "./animation";

export const metadata: Metadata = {
    title: "Log In",
    description: "Authentication forms built using the components.",
}

const words = `Transforming Investment Management with Intuitive Solutions.`;

export default function AuthenticationPage() {


    return (
        <div>
            <div className="container relative hidden h-screen overflow-hidden  flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 bg-background">
                <BackgroundGradientAnimation className="">

                    <div className="relative hidden h-full flex-col p-10 text-white lg:flex">
                        <div className="relative z-20 flex items-center text-lg font-medium">
                            <Link href="/">
                                <svg className="h-10 :w-auto fill-green-500 fill-white " viewBox="0 0 350.00000000000006 110.0053045131987"><g transform="matrix(4.640678977689433,0,0,4.640678977689433,-2.5987810683883894,0.7637259811136552)"><path d="M6.1 12.16 c-1.6 0 -2.8 1.22 -2.8 2.76 c0 1.52 1.24 2.76 2.8 2.76 c1.52 0 2.7 -1.24 2.7 -2.76 c0 -1.54 -1.18 -2.76 -2.7 -2.76 z M6.34 20.14 c-1.16 0 -2.28 -0.36 -3 -0.92 l0 4.3 l-2.78 0 l0 -13.78 l2.78 0 l0 0.8 c0.72 -0.56 1.84 -0.9 3 -0.9 c2.8 0 5.18 2.26 5.18 5.22 s-2.38 5.28 -5.18 5.28 z M17.7 12.16 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 z M20.46 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -0.82 l2.78 0 l0 10.26 l-2.78 0 z M34.22 9.74 l-3.44 9.9 c-0.96 2.74 -2.2 3.9 -4.72 3.9 l-1 0 l0 -2.5 l0.84 0 c0.92 0 1.52 -0.52 1.9 -1.32 l-3.82 -9.98 l3.18 0 l2.1 6.32 l2.08 -6.32 l2.88 0 z M43.54 20 l-1.4 -5.86 l-1.4 5.86 l-3.52 0 l-2.62 -10.26 l2.8 0 l1.68 7.06 l1.74 -7.06 l2.8 0 l1.72 7.1 l1.7 -7.1 l2.7 0 l-2.64 10.26 l-3.56 0 z M53.28 8.86 l-2.78 0 l0 -2.56 l2.78 0 l0 2.56 z M53.28 20 l-2.78 0 l0 -10.26 l2.78 0 l0 10.26 z M57.13999999999999 9.74 l0 1.04 c0.5 -0.58 1.56 -1.22 2.98 -1.22 c2.4 0 3.96 1.66 3.96 4.14 l0 6.3 l-2.76 0 l0 -5.82 c0 -1.22 -0.7 -2.06 -1.88 -2.06 c-1.36 0 -2.26 0.86 -2.26 2.28 l0 5.6 l-2.78 0 l0 -10.26 l2.74 0 z M70.44 17.68 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 z M73.2 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -4.26 l2.78 0 l0 13.7 l-2.78 0 z"></path></g></svg>
                            </Link>
                        </div>
                        <div className="flex justify-center items-center ">
                            <div className="h-[400px] w-[400px]">
                                {/* <LottieAnimation animationPath="/finance-animate.json" style={{ width: "100%", height: "100%" }}/> */}
                            </div>
                        </div>
                        <div className="relative z-20 mt-auto">
                            {/* <h1 className="text-lg font-bold tracking-tight text-gray-900 sm:text-3xl text-white dark:text-white">
                            Transforming Investment Management with <span className="text-black dark:text-primary">Intuitive Solutions</span>.
                        </h1> */}
                            <TextGenerateEffect words={words} />

                        </div>
                    </div>
                </BackgroundGradientAnimation>

                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[1000px]">
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    )
}

