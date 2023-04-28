import Image from 'next/image'
import Link from 'next/link'
import RnMLogo from 'public/images/rnm-logo.png'

export default function Header() {
  return (
    <header className="flex flex-wrap justify-between px-8">
      <Image src={RnMLogo} alt="" />
      <ul className="text-acid-green flex justify-between items-center text-2xl gap-14">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
      </ul>
    </header>
  )
}
