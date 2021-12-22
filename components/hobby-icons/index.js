import Coffee from './coffee.svg'
import Keyboard from './keyboard.svg'
import MagnifyGlass from './magnifying-glass.svg'

const components = {
  coffee: Coffee,
  keyboard: Keyboard,
  magnifyGlass: MagnifyGlass,
}

const HobbyIcon = ({ kind, href }) => {
  if (!href) return null

  const HobbySvg = components[kind]

  return (
    <a
      className="text-sm text-marsala transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <HobbySvg
        className={`fill-current text-marsala hover:text-marsalaDark dark:text-marsala dark:hover:text-marsalaLight`}
      />
    </a>
  )
}

export default HobbyIcon
