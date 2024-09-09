import React from 'react';
import style from '../styles/index.module.css';
import {
  HeroSection,
  Service,
  NFT_Slider,
  NewsLetter,
  Category,
  Filter,
  NFTCards,
} from "../components/ComponentIndex";

const Home = () => {
  return (
    <div className={style.homePage}>
      <HeroSection />
      <Service />
      <NFT_Slider />
      <Filter />
      <NFTCards />
      <Category />
      <NewsLetter />
    </div>
  );
};

export default Home;
