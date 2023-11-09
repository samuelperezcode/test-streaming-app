import HeaderLeft from './components/header-left'
import SearchBar from './components/search-bar'
import HeaderRight from './components/header-right'

function Header (): JSX.Element {
  return (
    <header className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10'>
      {/* Left Side */}
      <HeaderLeft />
      {/* Middle Side */}
      <SearchBar />
      {/* Right Side */}
      <HeaderRight />
    </header>
  )
}

export default Header
