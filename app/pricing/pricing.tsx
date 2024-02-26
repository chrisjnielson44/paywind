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

const basicPlan = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    price: '$139.95',
    description: 'Includes investment, retirement, college, insurance, tax, and estate planning, Snapshot™ plan summaries, Blueprint™ visuals, secure document vault, client-facing mobile app, lead generation, custom branding, and CRM and custodian integrations. Offers phone, email, and chat support.',
    features: ['Investment planning', 'Retirement planning', 'College planning', 'Insurance planning', 'Tax planning', 'Estate planning', 'Snapshot™ plan summaries', 'Blueprint™ visuals for financial life', 'Secure document vault', 'Client-facing mobile app', 'Lead generation', 'Custom branding', 'Integrations with CRM and custodians', 'Phone, email, and chat support'],
    mostPopular: false,
  }
];

const premiumPlan =
  [{
    name: 'Premium',
    id: 'tier-premium',
    href: '#',
    price: '$179.95',
    description: 'Builds on Basic by adding account aggregation, budgeting tools, smart transaction categorization, RightIntel™ business intelligence, and an optional assistant access for an additional fee.',
    features: ['All Basic features', 'Account aggregation', 'Budgeting tools', 'Smart transaction categorization', 'RightIntel™ business intelligence', '1 assistant access for add’l fee*'],
    mostPopular: true,
  }]
  ;

const platinumPlan =
  [{
    name: 'Platinum',
    id: 'tier-platinum',
    href: '#',
    price: 'Contact Us',
    description: 'Enhances Premium with team collaboration, custom asset classes, enhanced investment return parameters, firm-level assumptions & models, and additional assistant access options.',
    features: ['All Premium features', 'Team collaboration', 'Custom asset classes', 'Enhanced investment return parameters', 'Firm-level assumptions & models', '1+ assistant access for add\'l fee*'],
    mostPopular: false,
  }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [investment, setInvestment] = React.useState(0);
  const subscriptionFee = investment < 20000 ? 3 : ((investment * 0.0020) / 12).toFixed(2);
  return (
    <div className="bg-white dark:bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl xl:max-w-screen-xl px-4 lg:px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
            Tailored, Transparent Pricing for Financial Advisors
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-300 pb-20">
          Explore our clear and customizable pricing plans designed to meet the diverse needs of financial advisors. Whether you're managing a small client base or a large advisory firm, our packages are built to equip you with the necessary tools and insights for efficient practice management. With Paywind, you enjoy straightforward pricing structures without any concealed charges, empowering you to concentrate on delivering exceptional value to your clients and expanding your advisory business.
        </p>


        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {basicPlan.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-green-500 shadow-xl' : 'ring-2 ring-zinc-200 dark:ring-secondary',
                'shadow-xl rounded-3xl p-8 xl:p-10 '
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-xl font-semibold leading-8 text-black dark:text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-black dark:text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-black dark:text-white">{tier.price}</span>
                <span className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-300">/ per month</span>
              </p>


            
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-primary text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-green-500'
                    : 'bg-black dark:bg-white/10 text-white hover:bg-gray-800 dark:hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Contact Sales
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 text-gray-800 dark:text-gray-300">
                    <CheckIcon className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
        
            </div>
          ))}
          {premiumPlan.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-green-500' : 'ring-2 ring-zinc-200 dark:ring-secondary',
                'rounded-3xl p-8 xl:p-10 shadow-xl'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-xl font-semibold leading-8 text-black dark:text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-black dark:text-gray-300">{tier.description}</p>
              <p className="pt-5 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-black dark:text-white">{tier.price}</span>
                <span className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-300">/ per month</span>
              </p>

              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-primary text-white shadow-sm hover:bg-primary focus-visible:outline-green-500'
                    : 'bg-black dark:bg-white/10 text-white hover:bg-gray-800 dark:hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Contact Sales
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-800 dark:text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
           
            </div>
          ))}
          {platinumPlan.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-green-500' : 'ring-2 ring-zinc-200 dark:ring-secondary',
                'rounded-3xl p-8 xl:p-10 shadow-xl'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-xl font-semibold leading-8 text-black dark:text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold leading-5 text-white">
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
                    ? 'bg-primary text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-green-500'
                    : 'bg-black dark:bg-white/10 text-white hover:bg-gray-800 dark:hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Contact Sales
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-800 dark:text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 ">
                    <CheckIcon className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
      <div className='py-20' />
    </div>
  )
}
