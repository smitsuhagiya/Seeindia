// eslint-disable-next-line no-unused-vars
import React from "react";
import h1 from "./image/e1.png";
import h2 from "./image/e2.png";
import h3 from "./image/e3.png";
import h4 from "./image/e4.png";
import h5 from "./image/h5.png";
import h6 from "./image/h6.png";

import "./home1.css";

export default function Home() {
  return (
    <div className="product">
      <img src={h1} alt="h1" className="h1" />
      <img src={h2} alt="h2" className="h2" />
      <img src={h3} alt="h3" className="h3" />
      <img src={h4} alt="h4" className="h4" />

      <div className="silver-item1">
        <img src={h5} alt="h5" className="h5" height={300} width={600} />
        <div className="silver-item2">
          <img src={h6} alt="h6" className="h6" height={300} width={600} />
        </div>
      </div>
    </div>
  );
}
