import React from 'react'
import Layout from '../components/Layout';
import db from '../db.json';

const Pizza = () => {
  return (
    <Layout>
    <section className="mx-auto text-center">
            <h1 className='py-6 mb-4 text-3xl tracking-tight font-extrabold lg:text-6xl text-primary-600'>Pizzák (32 cm)</h1>
    </section>
    <section>
    <div className='grid grid-cols-4 gap-10 mx-auto px-32 py-10'>
    {db.map(x => {return(   
    <div className="w-full max-w-sm bg-red-600 border border-red-700 rounded-lg shadow">
    <a href="#">
        <img className="p-8 rounded-t-lg" src={x.pic} alt="pizza kép" />
        {/* src={x.pic}  */}
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{x.name}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
        <h6 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{x.desc}</h6>
        
 </div>
        <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white ">{x.price} Ft</span>
            <a href="#" className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Kosárba</a>
        </div>
    </div>
</div>
)})}
</div>
</section>
</Layout>
  )
}

export default Pizza