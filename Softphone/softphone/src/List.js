import "./App.css";
import React from "react";

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
// import  all from "@fortawesome/fontawesome-free/svgs/solid";

function List() {
  // const [number1, setNumber1] = useState("");
  // const [number2, setNumber2] = useState("");
  // const [currentOperation, setCurrentOperation] = useState("");
  // const [result, setResult] = useState(0);
  return (
    <div type="select" label="Multiple Select" multiple>
      <option value="select">select (multiple)</option>
      <option value="other">...</option>
      <option value="other">...</option>
      <option value="other">...</option>
      <option value="other">...</option>
      <option value="other">...</option>
      <option value="other">...</option>
    </div>
  );
}

export default List;
