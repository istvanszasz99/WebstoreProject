import React from 'react'
import Layout from '../components/Layout';

export const Problem = () => {
  return (
    <Layout>
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-64 lg:px-6 min-h-screen">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-primary-600 md:text-4xl ">Oops, valami probléma adódott</p>
            <p class="mb-4 text-lg font-light text-primary-600">Sajnáljuk, de az általad keresett weboldal nem található. </p>
            <a href="/" class="inline-flex text-primary-900 bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Vissza a főoldalra</a>
          </div>   
        </div>
      </section>
    </Layout>
  )
}
