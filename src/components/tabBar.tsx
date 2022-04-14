import React, { useState } from "react";
import MetricTab from "./tabs/MetricTab";
import UsTab from "./tabs/UsTab";

const Tabs = () => {

    const [activeTab, setActiveTab] = useState("tab1");

  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };

  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li className={activeTab === "tab1" ? "active" : ""}
        onClick={handleTab1}
        >
        Metric</li>
        <li className={activeTab === "tab2" ? "active" : ""}
        onClick={handleTab2}>
        US</li>
      </ul>
      <div className="outlet">
      {activeTab === "tab1" ? <MetricTab /> : <UsTab />}
      </div>
    </div>
  );
};
export default Tabs;