import { useState } from "react";
import "./Tabs.css";
import { LondonContent, ParisContent, TokyoContent } from "./TabsContents";
export const Tabs = () => {
  var [isActive, setActive] = useState(true);
  const [color, setColor] = useState("whitesmoke");
  var [isActive2, setActive2] = useState(false);
  var [isActive3, setActive3] = useState(false);

  return (
    <>
      <div className="tabs-wrapper">
        <button className="tabs-links" onClick={() => setActive((e) => !e)}>
          London
        </button>
        <button className="tabs-links" onClick={() => setActive2((e) => !e)}>
          Paris
        </button>
        <button className="tabs-links" onClick={() => setActive3((e) => !e)}>
          Tokyo
        </button>
      </div>

      <div className="tabs-links-content">
        {isActive && <LondonContent />}
        {isActive2 && <ParisContent />}
        {isActive3 && <TokyoContent />}
      </div>
    </>
  );
};
