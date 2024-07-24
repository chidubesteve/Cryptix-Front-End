import React from 'react';
import style from '../styles/index.module.css';
import {
  HeroSection,
  Service,
  NFT_Slider,
  NewsLetter,
  Title,
} from '../components/ComponentIndex';

const Home = () => {
  return (
    <div className={style.homePage}>
      <HeroSection />
      <Service />
      <NFT_Slider />
      <Title title="Browse by category" paragraph="Explore the NFTs in the most featured categories." />
      <NewsLetter />
    </div>
  );
};

export default Home;
