import { useState } from "react";
import "./Tabs.css";
import { TabsContents } from "./TabsContents";
export const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("London");
  const londonContent = "Londan is the capital city of England";
  const parisContent = "Paris is the capital of France";
  const tokyoContent = "ToKyo is the capital of Japan";
  const tabsData =
    currentTab === "London" ? (
      <TabsContents contents={londonContent} contentTitle={"London"} />
    ) : currentTab === "Paris" ? (
      <TabsContents contents={parisContent} contentTitle={"Paris"} />
    ) : currentTab === "Tokyo" ? (
      <TabsContents contents={tokyoContent} contentTitle={"Tokyo"} />
    ) : (
      <TabsContents contents={londonContent} contentTitle={"London"} />
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
