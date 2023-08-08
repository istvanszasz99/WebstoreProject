import Logo from '../img/Logo.png'

const Footer = () => {
    return ( 
<footer class="bg-red-600 shadow">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
        <div>
        <a href="/" class="flex items-center py-5 px-2 text-white">
            <img src={Logo} class="h-14"/>
          <span class="font-bold">Pizza Time</span>
        </a>
        </div>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                <li>
                    <a href="/" class="mr-4 hover:underline md:mr-6 ">Rólunk</a>
                </li>
                <li>
                    <a href="/" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="/" class="mr-4 hover:underline md:mr-6 ">License</a>
                </li>
                <li>
                    <a href="/Contact" class="hover:underline">Kapcsolat</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-white sm:mx-auto lg:my-8" />
        <span class="block text-sm text-white sm:text-center">© 2023 <a href="/" class="hover:underline">Pizza Time™</a>. All Rights Reserved.</span>
        <span class="block text-sm text-white sm:text-center">Fiktív Webáruház, készítette <a href="https://istvanszasz99.github.io/portfolio/" class="hover:underline">Szász István</a> Webfejlesztői portfolio bővítéseként.</span>
    </div>
</footer>
    )
  }
  
  export default Footer