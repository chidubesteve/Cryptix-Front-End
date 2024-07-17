import React from 'react';
import Link from 'next/link';

// Internal import
import Style from './HelpCenter.module.css';
import { helpCenter } from '../NavMenus';
const HelpCenter = ({ setHelpCenter }) => {
  const closeHelpCenter = () => {
    setHelpCenter(false);
  };
  return (
    <div className={Style.box}>
      {helpCenter.map((el, i) => (
        <div key={i + 1} className={Style.helpCenter}>
          <Link href={{ pathname: `${el.link}` }}>
          <span onClick={closeHelpCenter}>{el.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
