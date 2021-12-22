import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight md:text-8xl md:leading-14 md:border-r-2 md:px-6 dark:text-seafoam">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn't find this page.
        </p>
        <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
        <Link href="/">
          <button className="inline px-4 py-2 text-sm font-medium leading-5 transition-colors duration-150 text-seafoam bg-marsalaDark border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue hover:bg-marsala dark:hover:bg-marsala">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  )
}
