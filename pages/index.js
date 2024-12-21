import React from 'react';
import style from '../styles/index.module.css';
import {
  HeroSection,
  Service,
  NFT_Slider,
  NewsLetter,
  Category,
  Filter,
  Collection,
  CreatorSection,
  AudioNFT,
  VideoNFT,
  Brand
} from "../components/ComponentIndex";

const Home = () => {
  return (
    <div className={style.homePage}>
      <HeroSection />
      <Service />
      <NFT_Slider />
      <AudioNFT />
      <CreatorSection />
      <VideoNFT />
      <Collection />
      <Brand />
      <Filter />
      <Category />
      <NewsLetter />
    </div>
  );
};

export default Home;
