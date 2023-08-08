import React from 'react'
import Layout from '../components/Layout';

export const Contact = () => {
  return (
    <Layout>
    <section>
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Kapcsolat</h2>
      <p class="mb-8 lg:mb-16 text-center text-gray-900  sm:text-xl">Problémája akadt? Vegye fel velünk a kapcsolatot, hogy mihamarabb tudjunk segíteni.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="yourname@gmail.com" required />
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Tárgy</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Üzenet tárgya" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Üzenet</label>
              <textarea id="message" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg shadow-sm border border-gray-200 focus:ring-primary-500 focus:border-primary-500" placeholder="hagyjon üzenetet..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm bg-green-500 hover:bg-green-700 font-medium text-center text-gray-900 rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Küldés</button>
      </form>
  </div>
</section>
  </Layout>
  )
}