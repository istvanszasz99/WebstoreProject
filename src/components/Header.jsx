import Logo from '../img/Logo.png'

const Header = () => {
    return (
      <nav class="bg-red-600">
        <div className="mx-auto px-8">
        <div class="flex justify-between">
        <div class="flex space-x-4">
        <div>
        <a href="/" class="flex items-center py-5 px-2 text-white">
          <img src={Logo} class="h-14"/>
          <span class="font-bold">Pizza Time</span>
        </a>
        </div>
        <div class="hidden md:flex items-center space-x-1">
        <a href="/Pizza" class="py-5 px-3 text-white hover:text-gray-900">Pizzák</a>
        <a href="/Contact" class="py-5 px-3 text-white hover:text-gray-900">Kapcsolat</a>
        </div>
        </div>
        <div class="hidden md:flex items-center space-x-1">
        <a href="/Login" class="py-5 px-3 text-white hover:text-gray-900 first-letter:">Bejelentkezés</a>
        <a href="/Register" class="py-2 px-3 text-white bg-green-500 hover:bg-green-700 rounded transition duration-300">Regisztráció</a>
        </div>
        <div class="md:hidden flex items-center">
        <button class="mobile-menu-button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </button>
        </div>
        </div>
        </div>
        <div class="mobile-menu hidden">
        <a href="/Pizza" class="block py-2 px-4 text-sm hover:bg-gray-200">Pizzák</a>
        <a href="/Contact" class="block py-2 px-4 text-sm hover:bg-gray-200">Kapcsolat</a>
        </div>
      </nav>
    )
  }
  
  export default Header