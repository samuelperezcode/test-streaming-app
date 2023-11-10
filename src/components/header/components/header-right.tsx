import Link from 'next/link'
import { BsPerson } from 'react-icons/bs'

function HeaderRight (): JSX.Element {
  return (
    <section>
      <div className='hidden md:flex grow items-center justify-center gap-2'>
        <Link href='/account'>
          Account
        </Link>
        <span className='p-1.5 rounded-full bg-[#FF7B25]'>
          <BsPerson size={20} />
        </span>
      </div>
    </section>
  )
}

export default HeaderRight
