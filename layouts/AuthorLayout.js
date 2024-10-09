import Image from '@/components/Image'
import { PageSeo } from '@/components/SEO'
import HobbyIcon from '@/components/hobby-icons'
import siteMetadata from '@/data/siteMetadata'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, persona, email, linkedin, github } = frontMatter

  return (
    <>
      <PageSeo title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-marsala">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-comfortaa font-extrabold leading-9 tracking-tight dark:text-marsala sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={avatar}
              alt="avatar"
              width="200"
              height="200"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-comfortaa font-bold text-marsalaLight leading-8 tracking-tight">
              {name}
            </h3>
            <div className="text-marsalaDark dark:text-offWhite">{occupation}</div>
            <div className="text-marsala">"{persona}"</div>
            <div className="flex pt-6 space-x-3">
              <HobbyIcon kind="coffee" href={siteMetadata.coffee} />
              <HobbyIcon kind="keyboard" href={siteMetadata.keyboard} />
              <HobbyIcon kind="magnifyGlass" href={siteMetadata.magnifyGlass} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}
