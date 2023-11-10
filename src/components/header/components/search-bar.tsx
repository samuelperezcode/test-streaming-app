import { BsSearch } from 'react-icons/bs'

function SearchBar (): JSX.Element {
  return (
    <section className='w-96 hidden md:flex grow justify-center items-center'>
      <form action='' className='w-full bg-gray-600 text-white flex justify-center items-center gap-2 max-w-sm m-auto p-2 rounded-2xl'>
        <div className='w-full'>
          <input type='text' className='bg-transparent border-none text-white focus:outline-none w-full' />
        </div>
        <div>
          <BsSearch />
        </div>
      </form>
    </section>
  )
}

export default SearchBar
