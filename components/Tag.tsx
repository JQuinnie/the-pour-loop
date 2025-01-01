import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 font-comfortaa text-sm font-medium uppercase text-primary-600 hover:text-marsalaLight dark:text-seafoam dark:hover:text-marsalaLight"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
