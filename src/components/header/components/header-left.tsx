import Link from 'next/link'
import DropdownMenu from './dropdown-menu'
import Image from 'next/image'

function HeaderLeft (): JSX.Element {
  return (
    <section className='flex grow items-center justify-start gap-2'>
      <Link href='/'>
        <Image
          src='/images/ic_120x24_general_nav_home_logo.svg'
          alt='telenique logo'
          width={120}
          height={24}
          className='cursor-pointer'
        />
      </Link>
      <DropdownMenu />
    </section>
  )
}

export default HeaderLeft
