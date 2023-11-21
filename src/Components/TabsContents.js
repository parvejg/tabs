import { useState } from "react";
import "./TabsContents.css";
export const LondonContent = () => {
  return (
    <div className="contents-wrapper">
      <h2 className="content-title">London</h2>
      <p>London is the capital city of England</p>
    </div>
  );
};
export const ParisContent = () => {
  return (
    <div className="contents-wrapper">
      <h2 className="content-title">Paris</h2>
      <p>Paris is the capital of France</p>
    </div>
  );
};
export const TokyoContent = () => {
  return (
    <div className="contents-wrapper">
      <h2 className="content-title">Tokyo</h2>
      <p>ToKyo is the capital of Japan</p>
    </div>
  );
};
