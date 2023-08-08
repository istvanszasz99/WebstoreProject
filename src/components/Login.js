import React from 'react'

export const Login = () => {
  return (
    <section class="flex items-center justify-center py-64">
    <div class="w-full max-w-sm p-4 bg-red-600 rounded-lg shadow sm:p-6 md:p-8">
    <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-white">Bejelentkezés</h5>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-white">Email cím</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="yourname@gmail.com" required />
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-white ">Jelszó</label>
            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div class="flex items-start">
            <div class="flex items-start">
                <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label for="remember" class="ml-2 text-sm font-medium text-white ">Jelszó megjegyzése</label>
            </div>
            <a href="/" class="ml-auto text-sm text-white hover:underline ">Elfelejtette a jelszavát?</a>
        </div>
        <button type="submit" class="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Bejelentkezés</button>
        <div class="text-sm font-medium text-white ">
            Még nincs fiókja? <a href="/Register" class="text-green-300 hover:underline ">Regisztráció</a>
        </div>
    </form>
</div>
</section>
  )
}






