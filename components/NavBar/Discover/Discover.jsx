import React from 'react';
import Link from 'next/link';

// Internal import
import Style from './Discover.module.css';
import { discover } from '../NavMenus';

const Discover = ({ setDiscover }) => {
  const closeDiscover = () => {
    setDiscover(false);
  };
  return (
    <>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>
            <span onClick={closeDiscover}>{el.name}</span>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Discover;
