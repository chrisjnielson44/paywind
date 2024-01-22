import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/20/solid'


const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Features() {
  return (
    <div>
      <div className="bg-white-200 dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight dark:text-white sm:text-6xl">Features</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
      </div>
    </div>
      <div className="bg-white dark:bg-gray-900 py-20 sm:py-18">
        <div className="max-w-screen-xl px-4 py-8 mx-auto">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">Cusotmizable Dashboard</h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p className='dark:text-gray-300'>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                  vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                  erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                  semper sed amet vitae sed turpis id.
                </p>
                <p className="mt-8 dark:text-gray-300">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                  fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                  adipiscing egestas.
                </p>
              </div>
              <div>
                <p className='dark:text-gray-300'>
                  Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
                  eget. Est augue maecenas risus nulla ultrices congue nunc tortor.
                </p>
                <p className="mt-8 dark:text-gray-300">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                  fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                  adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16 lg:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              src="/dashboard.png"
              alt=""
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%] dark:bg-gradient-to-t dark:from-gray-900" />
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-white dark:bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  {/* <h2 className="text-base font-semibold leading-7 text-green-500">Deploy faster</h2> */}
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">Track External Accounts</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                    iste dolor cupiditate blanditiis ratione.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900 dark:text-gray-300">
                          <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-500" aria-hidden="true" />
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                src='https://images.ctfassets.net/zucqsg1ttqqy/5TROK9LX3Luhq3irX4QHrq/600c3aeb339008e30ba69361dc535dbb/inst-select-credential_2x--1-.png'
                className='h-15 w-auto'
              />
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-white dark:bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                <div className="lg:max-w-lg">
                  {/* <h2 className="text-base font-semibold leading-7 text-green-500">Deploy faster</h2> */}
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4x dark:text-gray-200">Progressive Profiling</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                    iste dolor cupiditate blanditiis ratione.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-500" aria-hidden="true" />
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="flex items-start justify-end lg:order-first">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/021/845/654/original/simplified-registration-concept-icon-progressive-profiling-user-authentication-data-abstract-idea-thin-line-illustration-isolated-outline-drawing-editable-stroke-vector.jpg"
                  alt="Product screenshot"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>


        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              {/* <h2 className="text-base font-semibold leading-7 text-green-500">Everything you need</h2> */}
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Automated Investment Adjustments</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
                dolor cupiditate blanditiis.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-500" aria-hidden="true" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Loan Tracking
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                accusamus quisquam.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">

            </div>
          </div>
        </div>

      </div>
    </div>

  )
}