"use client";
import { useState } from "react";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("");

  const tabs = [
    {
      label: "Tab 1",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          harum neque praesentium! Iste recusandae earum et minima? Ab veniam
          accusamus sunt impedit velit ipsa incidunt harum quidem, quis eos
          beatae!
        </p>
      ),
    },
    {
      label: "Tab 2",
      content: (
        <p>
          Tab 2 sit amet consectetur adipisicing elit. Repellat, te eius dolorum
          neque error quidem inventore repellendus, porro delectus.
        </p>
      ),
    },
    {
      label: "Tab 3",
      content: (
        <p>
          Tab 3 cumque quasi consectetur harum doloremque omnis placeat
          inventore odit.
        </p>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-center">
        {tabs.map((tab, index) => (
          <button
            className="bg-red-400 rounded-full m-8 px-5 py-2"
            key={index}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs.find((tab) => tab.label === activeTab)?.content}</div>
    </>
  );
};
