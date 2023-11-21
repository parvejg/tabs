import { useState } from "react";
import "./Tabs.css";
import { LondonContent, ParisContent, TokyoContent } from "./TabsContents";
export const Tabs = () => {
  var [isActive, setActive] = useState(true);
  var [isActive2, setActive2] = useState(false);
  var [isActive3, setActive3] = useState(false);
  const [currentTab, setCurrentTab] = useState("London");
  const tabsData =
    currentTab === "London" ? (
      <LondonContent />
    ) : currentTab === "Paris" ? (
      <ParisContent />
    ) : currentTab === "Tokyo" ? (
      <TokyoContent />
    ) : (
      <LondonContent />
    );
  return (
    <>
      <div className="tabs-wrapper">
        <button
          className="tabs-links"
          value={"London"}
          onClick={(e) => setCurrentTab(e.target.value)}
          style={{
            background: currentTab === "London" ? "gray" : "whitesmoke",
          }}
        >
          London
        </button>
        <button
          value={"Paris"}
          className="tabs-links"
          onClick={(e) => setCurrentTab(e.target.value)}
          style={{ background: currentTab === "Paris" ? "gray" : "whitesmoke" }}
        >
          Paris
        </button>
        <button
          className="tabs-links"
          value={"Tokyo"}
          onClick={(e) => setCurrentTab(e.target.value)}
          style={{ background: currentTab === "Tokyo" ? "gray" : "whitesmoke" }}
        >
          Tokyo
        </button>
      </div>
      <div className="tabs-links-content">{tabsData}</div>
    </>
  );
};
