import React, { useState } from "react";
import "./App.css";
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
        padding: "150px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="content_wrapper">
        <div className="left_side">
          <h1 style={{ color: "#50C878", marginBottom: "20px" }}>
            Joonas Ruuth
          </h1>
          <img
            src={Me}
            alt="Me"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />
          <p>
            Salesforce Developer at{" "}
            <a href="https://ceili.fi/" target="_blank" rel="noreferrer">
              Ceili Oy
            </a>
          </p>
          <p>
            Computer Science student at{" "}
            <a href="https://www.jyu.fi/en" target="_blank" rel="noreferrer">
              University of Jyväskylä
            </a>
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
            <a
              href="https://github.com/jkruuth"
              class="fa fa-github"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              href="https://www.linkedin.com/in/joonas-ruuth-39660219b/"
              class="fa fa-linkedin"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
        <div className="right_side">
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
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
