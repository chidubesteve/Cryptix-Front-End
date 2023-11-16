import React from 'react'
import style from '../styles/index.module.css';
import {HeroSection} from '../components/ComponentIndex';

const Home = () => {
  return (
    <div className={style.homePage}>
      <HeroSection />
    </div>
  )
}

export default Home