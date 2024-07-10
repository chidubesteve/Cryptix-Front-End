import React from 'react'
import style from '../styles/index.module.css';
import {HeroSection} from '../components/ComponentIndex';
import {Service} from '../components/ComponentIndex'

const Home = () => {
  return (
    <div className={style.homePage}>
      <HeroSection />
      <Service />
    </div>
  )
}

export default Home