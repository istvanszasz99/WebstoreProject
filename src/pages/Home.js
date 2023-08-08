import React from 'react'
import Layout from '../components/Layout';
import videobg from '../img/bgvid.mp4';
import Logo from '../img/Logo.png'

export const Home = () => {
  return (
    <Layout>    
      <video src={videobg} autoPlay loop muted />
      <div class="content">
      <img src={Logo} alt="Logo"  />
      </div>
    </Layout>
  )
}
