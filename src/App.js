import React, { useState } from "react";
import Me from "./images/updatedMe.jpg";

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState("About");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <div>
            <h2>About Me</h2>
            <p>
              I am Computer Science student from University of Jyväskylä. I'm
              eager to learn new and motivated to develop my skills in area of
              software development.
            </p>
          </div>
        );
      case "Skills":
        return (
          <div>
            <h2>Skills</h2>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>HTML/CSS</li>
              <li>SQL</li>
            </ul>
          </div>
        );
      case "Education":
        return (
          <div>
            <h2>Education</h2>
            <ul>
              <li>Bachelor of Science in Computer Science, XYZ University</li>
              <li>
                Master of Science in Information Technology, ABC University
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#1A2238",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flexGrow: 0, marginRight: 70, maxWidth: 300 }}>
          <h1 style={{ color: "#50C878", marginBottom: "20px" }}>
            My Portfolio
          </h1>
          <img
            src={Me}
            alt="Me"
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          />
        </div>
        <div style={{ flexGrow: 0, flexBasis: 100 }}>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <button
              style={{
                backgroundColor: activeTab === "About" ? "#50C878" : "#4B4D69",
                color: "white",
                marginRight: "10px",
              }}
              onClick={() => handleTabClick("About")}
            >
              About
            </button>
            <button
              style={{
                backgroundColor: activeTab === "Skills" ? "#50C878" : "#4B4D69",
                color: "white",
                marginRight: "10px",
              }}
              onClick={() => handleTabClick("Skills")}
            >
              Skills
            </button>
            <button
              style={{
                backgroundColor:
                  activeTab === "Education" ? "#50C878" : "#4B4D69",
                color: "white",
                marginRight: "10px",
              }}
              onClick={() => handleTabClick("Education")}
            >
              Education
            </button>
          </div>
        </div>
      </div>

      {renderTabContent()}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <a
            href="https://github.com/my-github-profile"
            style={{ color: "#50C878" }}
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
