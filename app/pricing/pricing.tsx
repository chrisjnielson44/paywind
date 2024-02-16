'use client'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

const SliderComponent = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));

SliderComponent.displayName = SliderPrimitive.Root.displayName;

const investing = [
  {
    name: 'Personal Investing',
    id: 'tier-investing',
    href: '#',
    price: '$3',
    percent: '0.20%',
    description: 'A comprehensive package for traditional investors, offering advanced tools and insights.',
    features: ['$0 Minimmum Deposit', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: true,
  }
]

const crypto = [
  {
    name: 'Crypto',
    id: 'tier-crypto',
    href: '#',
    price: '$1',
    percent: '0.90%',
    description: 'Tailored for the modern crypto investor, with specialized tools and resources.',
    features: ['$0 Minimmum Deposit', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: false,
  }
]

const student = [
  {
    name: 'Student Investing',
    id: 'tier-student',
    href: '#',
    price: 'Free',
    description: 'Essential financial tools and education for students beginning their investing journey.',
    features: ['$0 Minimmum Deposit', 'Everything in the Investing Model', 'Student Loan Tracking'],
    mostPopular: false,
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [investment, setInvestment] = React.useState(0);
  const subscriptionFee = investment < 20000 ? 3 : ((investment * 0.0020) / 12).toFixed(2);
  return (
    <div className="bg-white dark:bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl xl:max-w-screen-2xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
            Simple, Flexible Pricing for Every Investor
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-300 pb-20">
          Discover our straightforward and adaptable pricing options designed to fit every investor&apos; needs. Whether you&apos;re just starting out or are a seasoned investor, our plans are crafted to provide you with the tools and resources you need for effective financial management. With Paywind, you get transparent pricing with no hidden fees, ensuring you can focus on what&apos; important - growing your investments and achieving your financial goals
        </p>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {investing.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-green-500 shadow-xl' : 'ring-1 ring-white/5',
                'rounded-3xl p-8 xl:p-10 '
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-xl font-semibold leading-8 text-black dark:text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-green-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-black dark:text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-black dark:text-white">{tier.price}</span>
                <span className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-300">/ per month</span>
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-md font-semibold leading-6 text-gray-500 dark:text-gray-300">or</span>
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-black dark:text-white">{tier.percent}<sup>1</sup></span>
                <span className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-300">/ annual fee</span>
              </p>

              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-green-500 text-white shadow-sm hover:bg-green-600 focus-visible:outline-green-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Start Investing
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 text-gray-800 dark:text-gray-300">
                    <CheckIcon className="h-6 w-5 flex-none text-green-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-sm leading-6 text-gray-500 dark:text-gray-300"><sup>1</sup> For accounts over $20,000</span>
              </p>
            </div>
          ))}
          {crypto.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-green-500' : 'ring-1 ring-gray-200 dark:ring-white/5',
                'rounded-3xl p-8 xl:p-10 shadow-xl'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-xl font-semibold leading-8 text-black dark:text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-green-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-black dark:text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-black dark:text-white">{tier.percent}</span>
                <span className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-300">+ trading fees<sup>2</sup></span>
              </p>

              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-green-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-green-500'
                    : 'bg-black dark:bg-white/10 text-white hover:bg-gray-800 dark:hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Start Investing
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-800 dark:text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-green-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-sm leading-6 text-gray-500 dark:text-gray-300"><sup>2</sup> Trading fees varies</span>
              </p>
            </div>
          ))}
          {student.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-green-500' : 'ring-1 ring-gray-200 dark:ring-white/5',
                'rounded-3xl p-8 xl:p-10 shadow-xl'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-xl font-semibold leading-8 text-black dark:text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-green-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-black dark:text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-black dark:text-white">{tier.price}</span>
              </p>

              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-green-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-green-500'
                    : 'bg-black dark:bg-white/10 text-white hover:bg-gray-800 dark:hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Start Investing
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-800 dark:text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 ">
                    <CheckIcon className="h-6 w-5 flex-none text-green-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
      {/* <div className='mx-auto max-w-2xl my-40'>

        <Card className='shadow-xl dark:bg-background dark:border-gray-600'>
          <CardHeader>
            <CardTitle className='text-center text-3xl py-10'>Estimated Cost</CardTitle>
            <CardDescription className='text-center text-4xl text-black dark:text-white font-bold'>${subscriptionFee} <span className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-300"> / per month</span> </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="px-5 ">
              <div className="text-center mt-4">
                <span className="text-xl font-semibold">Initial Deposit ${investment}</span>
                <div className="mt-1">
                  <span className="text-lg">
                  </span>
                </div>
              </div>
              <div className='pt-10'>
                <SliderComponent
                  defaultValue={[0]}
                  max={40000}
                  step={2000}
                  onValueChange={(value) => setInvestment(value[0])}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className='text-center px-5 py-10'>The base price for investing accounts is $3/month. This automatically switches to an annual price of 0.20% when you have a Paywind balance of $20,000 or more across any investing accounts and crypto accounts</p>
          </CardFooter>
        </Card>
      </div> */}
      <div className='py-20'/>
    </div>
  )
}
