import React from "react";
import Link from "next/link";

// Internal import
import Style from "./Discover.module.css";
import { discover } from "../NavMenus";

const Discover = () => {

  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
