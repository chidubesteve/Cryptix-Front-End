import React from 'react'
import style from '../styles/index.module.css';
import {HeroSection, Service, NFT_Slider} from '../components/ComponentIndex'

const Home = () => {
  return (
    <div className={style.homePage}>
      <HeroSection />
      <Service />
      <NFT_Slider />
    </div>
  )
}

export default Home