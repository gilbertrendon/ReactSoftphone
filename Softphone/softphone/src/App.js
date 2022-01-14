import "./App.css";
import React from "react";
import Tabs from "./Tabs";
import SubTabs from "./SubTabs";

// import React, { useState } from "react";
// import { Table } from "@material-ui/core";

// get our fontawesome imports
import {
  faBlenderPhone,
  faHospitalUser,
  faHistory,
  faCogs,
  faPhone,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function App() {

  return (
    <div className="App">
      <div className="softphoneContainer-grid">
        <Tabs />
      </div>

      <div className="information-grid">
        <div className="softphoneContainer-grid">
          <SubTabs />
        </div>
      </div>
    </div>
  );
}

export default App;
