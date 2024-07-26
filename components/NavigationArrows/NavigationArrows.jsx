import React from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

//internal imports
import style from './NavigationArrows.module.css';

const NavigationArrows = ({ handleNext, handlePrev, className }) => {
  const classname = `${style.navigation_arrows_box} ${
    className ? className : ''
  }`;
  return (
    <div className={classname}>
      <span>
        <HiArrowLeft
          className={style.navigation_arrows_box_arrow_left}
          onClick={handlePrev}
          title="previous"
        />
      </span>
      <span>
        <HiArrowRight
          className={style.navigation_arrows_box_arrow_right}
          onClick={handleNext}
          title="next"
        />
      </span>
    </div>
  );
};

export default NavigationArrows;
