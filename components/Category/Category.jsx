import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaCircle } from 'react-icons/fa';

// internal imports
import style from './Category.module.css';
import images from '../../images';
import Image from 'next/future/image';
import { NavigationArrows, Title } from '../ComponentIndex';

const Category = () => {
  const categoryContainerRef = useRef(null);
  const categoryRef = useRef(null);
  const CategoryArray = [
    { id: 1, title: 'Entertainment', count: '1169 NFTs', image: 'category1' },
    { id: 2, title: 'Art', count: '1202 NFTs', image: 'category2' },
    { id: 3, title: 'Music', count: '8706 NFTs', image: 'category3' },
    { id: 4, title: 'Gaming', count: '1544 NFTs', image: 'category4' },
    { id: 5, title: 'Science', count: '432 NFTs', image: 'category5' },
    { id: 6, title: 'Sports', count: '6272 NFTs', image: 'category6' },
  ];

  const getItemWidth = () => {
    if (categoryRef.current) {
      return categoryRef.current.clientWidth
    }
    return 0;
  };

  const handleNext = useCallback(() => {
    if (categoryContainerRef.current) {
      const itemWidth = getItemWidth();
      const currentScrollLeft = categoryContainerRef.current.scrollLeft;
      const containerWidth = categoryContainerRef.current.clientWidth;
      const maxScrollLeft = categoryContainerRef.current.scrollWidth - containerWidth;

      if (currentScrollLeft >= maxScrollLeft) {
        categoryContainerRef.current.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        categoryContainerRef.current.scrollBy({
          left: itemWidth,
          behavior: 'smooth',
        });
      }
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (categoryContainerRef.current) {
      const itemWidth = getItemWidth();
      const currentScrollLeft = categoryContainerRef.current.scrollLeft;

      if (currentScrollLeft === 0) {
        const containerWidth = categoryContainerRef.current.clientWidth;
        const maxScrollLeft = categoryContainerRef.current.scrollWidth - containerWidth;
        categoryContainerRef.current.scrollTo({
          left: maxScrollLeft,
          behavior: 'smooth',
        });
      } else {
        categoryContainerRef.current.scrollBy({
          left: -itemWidth,
          behavior: 'smooth',
        });
      }
    }
  }, []);

  return (
    <div className={style.category}>
      <div className={style.category_box_title}>
        <Title
          title="Browse by category"
          paragraph="Explore the NFTs in the most featured categories."
        />
        <NavigationArrows
          handleNext={handleNext}
          handlePrev={handlePrev}
          className={style.navigationArrows}
        />
      </div>
      <div className={style.category_box} ref={categoryContainerRef}>
        {CategoryArray.map((element) => (
          <div
            className={style.category_box_item}
            key={element.id}
            ref={categoryRef}
          >
            <Image
              src={images[element.image]}
              alt="category"
              width={350}
              height={150}
              placeholder="data:image/ ..."
              className={style.category_image}
            />
            <div className={style.category_box_item_title}>
              <span className={style.category_box_item_title_span}>
                <FaCircle className={style.category_box_item_title_span_icon} />
              </span>
              <div className={style.category_box_item_title_info}>
                <h3>{element.title}</h3>
                <small>{element.count}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
