'use client'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const listOfMobileMenuFileds = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Live Channels',
    route: '/'
  },
  {
    label: 'Categories',
    route: '/'
  },
  {
    label: 'Account',
    route: '/'
  }
]

interface Props {
  isOpen: boolean
}

interface ItemProps {
  label: string
  route: string
}

function MenuFieldItem ({ label, route }: ItemProps): JSX.Element {
  return (
    <li className='p-4 text-3xl font-bold'>
      <Link href={route}>
        {label}
      </Link>
    </li>
  )
}

function MobileMenuFields ({ isOpen }: Props): JSX.Element {
  return (
    <section className={`md:hidden fixed ${isOpen ? 'top-0' : 'top-[-100%]'} left-0 h-screen w-full bg-[#0e0e10] flex justify-center items-center ease-in duration-300`}>
      <ul className='text-center'>
        {
          listOfMobileMenuFileds.map(field => {
            return <MenuFieldItem key={field.label} label={field.label} route={field.route} />
          })
        }
      </ul>
    </section>
  )
}

function MobileMenu (): JSX.Element {
  const [open, setOpen] = useState(false)

  const handleOpen = (): void => {
    setOpen(!open)
  }

  return (
    <>
      <section className='block md:hidden z-10'>
        <button onClick={handleOpen}>
          {
            open
              ? <AiOutlineClose size={25} />
              : <AiOutlineMenu size={25} />
          }
        </button>
      </section>
      <MobileMenuFields isOpen={open} />
    </>
  )
}

export default MobileMenu
