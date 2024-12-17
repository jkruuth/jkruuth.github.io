import React, { useState, useEffect } from "react";
import "./App.css";
import Me from "./images/updatedMe.jpg";

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState("About");

  useEffect(() => {
    // Function to send event
    function sendSalesforceEvent() {
      if (window.SalesforceInteractions) {
        window.SalesforceInteractions.sendEvent({
          user: {
            identities: {
              loyaltyId: "885627312393",
            },
            attributes: {
              firstName: "Joe",
              lastName: "Smith",
              email: "joe.smith@domain.com",
            },
          },
        });
      } else {
        console.error("SalesforceInteractions is not available.");
      }
    }

    // // Ensure the SDK is initialized before sending the event
    // window.c360a.push(["ready", sendSalesforceEvent]);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const handleTabClick = (tabName) => {
    sendSalesforceEvent();
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
            <ul>{/* Skills content */}</ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => handleTabClick("About")}>About</button>
        <button onClick={() => handleTabClick("Skills")}>Skills</button>
      </nav>
      {renderTabContent()}
    </div>
  );
};

export default PortfolioPage;
