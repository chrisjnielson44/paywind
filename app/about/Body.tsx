import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'


const stats = [
  { label: 'Transactions every 24 hours', value: '44 million' },
  { label: 'Assets under holding', value: '$119 trillion' },
  { label: 'New users annually', value: '46,000' },
]

const values = [
  {
    name: 'Innovation and Adaptability',
    description:
      'At Paywind, innovation is the heartbeat of our operations. We continuously strive to redefine the standards of financial management technology. Our focus is on adaptability, ensuring that our solutions evolve with changing market trends and user needs, delivering cutting-edge functionality that simplifies complex financial processes.',
     },

  {
    name: 'User Empowerment',
    description:
      'Empowering our users is our primary goal. We believe in providing tools and resources that enable individuals to make informed financial decisions. By demystifying finance, we aim to give our users the confidence to manage their money effectively, fostering financial literacy and independence.'
  },
  {
    name: 'Integrity and Transparency',
    description:
      'Integrity and transparency are the cornerstones of our business. We are committed to building trust with our users through honest communication, ethical practices, and transparent operations. Our platform ensures data security and privacy, maintaining the highest standards of accountability.'
  },
  {
    name: 'Collaboration and Community Building',
    description:
      'We value the power of collaboration and community. Paywind is dedicated to creating a supportive ecosystem where users, team members, and financial experts can share knowledge and insights. We encourage community engagement to foster a network of support, enhancing the collective financial wisdom.'
  },
  {
    name: 'Sustainability and Responsibility',
    description:
      'Our approach to business is grounded in sustainability and responsibility. We recognize our role in the larger financial ecosystem and are committed to making decisions that have a positive impact on society and the environment. This includes responsible investing, promoting sustainable practices, and supporting community initiatives.'
  },
  {
    name: 'Diversity and Inclusion',
    description:
      'Diversity and inclusion are integral to our identity. We believe that diverse perspectives lead to innovative solutions. Paywind is dedicated to creating an inclusive environment where everyone, regardless of background, has equal access to financial tools and opportunities. We strive to ensure our services are accessible and relevant to a diverse global audience.'
  },
]

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

const jobs = [
  { name: 'Software Engineer', title: 'Software Engineer', location: 'Remote', role: 'Engineering' },
  { name: 'Product Designer', title: 'Product Designer', location: 'Remote', role: 'Design' },
  { name: 'Sales Representative', title: 'Sales Representative', location: 'Remote', role: 'Sales' },
  // Add more jobs as needed...
]


export default function Body() {
  return (
    <main className="isolate pb-20 dark:bg-background">
      {/* Hero section */}
      <div className="relative z-10">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-zinc-200 dark:stroke-zinc-700 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-zinc-900">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
        </svg>
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          {/* <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#32a852] to-[#7bc96f] opacity-20" style={{
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            }}
          /> */}
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl xl:max-w-screen-xl px-4 pb-32 pt-36 sm:pt-60 lg:pt-32">
            <div className="mx-auto max-w-2xl  lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-zinc-200 sm:text-5xl dark:text-white">
                  Transforming Investment Management with <span className="text-green-500">Intutive Solutions</span>.
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-gray-600 dark:text-zinc-200 sm:max-w-md lg:max-w-none">


                </p>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGVvcGxlJTIwZG9pbmclMjBmaW5hbmNlfGVufDB8fDB8fHwy"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-background/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW52ZXN0bWVudHN8ZW58MHx8MHx8fDI%3D"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-background/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEludmVzdG9yfGVufDB8fDB8fHwy"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-background/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-background/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1524758870432-af57e54afa26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEludmVzdG9yfGVufDB8fDB8fHwy"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-background/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto -mt-12 max-w-7xl xl:max-w-screen-xl px-4 sm:mt-0 lg:px-4 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-zinc-200 sm:text-4xl dark:text-white">Our mission</h2>
          <div className="mt-6 flex gap-x-8 gap-y-20 ">
            <div className="lg:w-full">
              <p className="text-xl leading-8 text-gray-600 dark:text-zinc-200 dark:text-gray-300 ">
                Paywind is committed to pioneering a new era in personal finance, where managing money is synonymous with fostering personal growth and achieving life&apos;s ambitions. Our mission is to empower individuals to take control of their financial destiny, transforming the often complex world of finance into an accessible, understandable, and highly personalized experience. We envision a future where financial literacy and well-being are not just aspirations but realities for everyone. Through our innovative platform, we aim to unlock the potential of every individual, helping them to navigate life&apos;s financial journey with confidence, wisdom, and foresight. At Paywind, we are not just managing finances; we are building a foundation for dreams to thrive and goals to be realized, ensuring that every step taken is a step towards a more secure and fulfilling life.
              </p>
            </div>
            {/* <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-gray-600 dark:text-zinc-200">{stat.label}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-zinc-200">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div> */}
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="mt-32 sm:mt-40 xl:mx-auto  max-w-7xl xl:max-w-screen-xl xl:px-8 flex items-center justify-center">
        <svg className="md:h-20 w-auto h-12 fill-green-500 dark:fill-white " viewBox="0 0 350.00000000000006 110.0053045131987"><g transform="matrix(4.640678977689433,0,0,4.640678977689433,-2.5987810683883894,0.7637259811136552)"><path d="M6.1 12.16 c-1.6 0 -2.8 1.22 -2.8 2.76 c0 1.52 1.24 2.76 2.8 2.76 c1.52 0 2.7 -1.24 2.7 -2.76 c0 -1.54 -1.18 -2.76 -2.7 -2.76 z M6.34 20.14 c-1.16 0 -2.28 -0.36 -3 -0.92 l0 4.3 l-2.78 0 l0 -13.78 l2.78 0 l0 0.8 c0.72 -0.56 1.84 -0.9 3 -0.9 c2.8 0 5.18 2.26 5.18 5.22 s-2.38 5.28 -5.18 5.28 z M17.7 12.16 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 z M20.46 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -0.82 l2.78 0 l0 10.26 l-2.78 0 z M34.22 9.74 l-3.44 9.9 c-0.96 2.74 -2.2 3.9 -4.72 3.9 l-1 0 l0 -2.5 l0.84 0 c0.92 0 1.52 -0.52 1.9 -1.32 l-3.82 -9.98 l3.18 0 l2.1 6.32 l2.08 -6.32 l2.88 0 z M43.54 20 l-1.4 -5.86 l-1.4 5.86 l-3.52 0 l-2.62 -10.26 l2.8 0 l1.68 7.06 l1.74 -7.06 l2.8 0 l1.72 7.1 l1.7 -7.1 l2.7 0 l-2.64 10.26 l-3.56 0 z M53.28 8.86 l-2.78 0 l0 -2.56 l2.78 0 l0 2.56 z M53.28 20 l-2.78 0 l0 -10.26 l2.78 0 l0 10.26 z M57.13999999999999 9.74 l0 1.04 c0.5 -0.58 1.56 -1.22 2.98 -1.22 c2.4 0 3.96 1.66 3.96 4.14 l0 6.3 l-2.76 0 l0 -5.82 c0 -1.22 -0.7 -2.06 -1.88 -2.06 c-1.36 0 -2.26 0.86 -2.26 2.28 l0 5.6 l-2.78 0 l0 -10.26 l2.74 0 z M70.44 17.68 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 z M73.2 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -4.26 l2.78 0 l0 13.7 l-2.78 0 z"></path></g></svg>
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl xl:max-w-screen-xl px-4 sm:mt-40 lg:px-4">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-zinc-200 sm:text-4xl dark:text-white">Our values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-zinc-200 dark:text-gray-300">
            Paywind is built on a foundation of core values that guide our innovation, interactions, and community initiatives. These principles, outlined below, embody our commitment to transforming personal finance into a space of empowerment, integrity, and collaborative growth.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900 dark:text-zinc-200 dark:text-white">{value.name}</dt>
              <dd className="mt-1 text-gray-600 dark:text-zinc-200 dark:text-gray-300">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      
      <div id="careers"></div>

      {/* Careers */}
      <div className="mx-auto mt-32 max-w-7xl xl:max-w-screen-xl px-4 sm:mt-40 lg:px-4">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-4xl font-semibold leading-6 text-gray-900 dark:text-zinc-200 dark:text-white">Careers</h1>
            <p className="mt-8 text-xl font-semibold text-gray-700 dark:text-white">
              Open Roles
            </p>
          </div>
        </div>
        <div className="mt-5 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-zinc-300 dark:divide-zinc-700">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-zinc-200 dark:text-white sm:pl-0">
                      Position
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-zinc-200 dark:text-white">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-zinc-200 dark:text-white">
                      Location
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-zinc-200 dark:text-white">
                      Department
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Apply</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-300 dark:divide-zinc-700">
                  {jobs.map((job) => (
                    <tr key={job.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-zinc-200 dark:text-white sm:pl-0">
                        {job.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-white">{job.title}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-white">{job.location}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-white">{job.role}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <Button className="text-white">
                          Apply
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


      <div className="relative isolate" id="contact">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 lg:grid-cols-2 px-4">
          <div className="relative pb-20 pt-24 sm:pt-32 lg:static lg:py-48">
            <div className="mx-auto max-w-screen-xl lg:mx-0 lg:max-w-lg">

              <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-200">Contact Us</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-zinc-200">
                Whether you're facing challenges with workflow automation, compliance management, or client data analytics, our team is here to help. Reach out to explore how Paywind can transform your financial advisory services.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600 dark:text-zinc-200">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon className="h-7 w-6 text-gray-400 dark:text-zinc-200" aria-hidden="true" />
                  </dt>
                  <dd>
                    123 Advisor Lane
                    <br />
                    Finance City, FA 12345
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon className="h-7 w-6 text-gray-400 dark:text-zinc-200" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900 dark:text-zinc-200" href="tel:+1 (555) 987-6543">
                      +1 (555) 987-6543
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon className="h-7 w-6 text-gray-400 dark:text-zinc-200" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900 dark:text-zinc-200" href="mailto:support@paywind.com">
                      support@paywind.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form action="#" method="POST" className="px-4 pb-24 pt-20 sm:pb-32 lg:px-4 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-200">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <Input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-200">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <Input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-200">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-200">
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <Input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-200">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <Textarea
                      name="message"
                      id="message"
                      rows={4}
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  type="submit"
                  className="bg-primary text-white w-full"
                >
                  Send message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </main>
  )
}

