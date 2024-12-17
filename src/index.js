import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Function to send event
function sendSalesforceEvent() {
  SalesforceInteractions.sendEvent({
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
}

sendSalesforceEvent();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
