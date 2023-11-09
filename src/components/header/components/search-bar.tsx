import { BsSearch } from 'react-icons/bs'

function SearchBar (): JSX.Element {
  return (
    <section className='hidden md:flex grow-[2] justify-center items-center'>
      <form action='' className='bg-gray-600 text-white flex justify-center items-center max-w-sm m-auto p-2 rounded-2xl'>
        <div>
          <input type='text' className='bg-transparent border-none text-white focus:outline-none' />
        </div>
        <div>
          <BsSearch />
        </div>
      </form>
    </section>
  )
}

export default SearchBar
