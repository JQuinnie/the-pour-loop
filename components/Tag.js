import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-3 text-sm font-comfortaa font-medium uppercase text-primary-600 dark:text-seafoam hover:text-marsalaLight dark:hover:text-marsalaLight"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
