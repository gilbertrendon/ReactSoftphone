import { useState } from "react";
import "./Tabs.css";
import "./App.css";

import {
  faCogs,
  faPhone,
  faHistory,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

function SubTabs() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

  return (
    <div className="sub-container">
      <div className="banner-grid"></div>
      <div className="bloc-tabs"></div>{" "}
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <button className="button-left" title="Softphone">
            <FontAwesomeIcon icon={faHistory} />
          </button>
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <button title="Mensajes">
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </button>
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <button title="Información">
            <FontAwesomeIcon icon={faInfo} />
          </button>
        </button>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {/* Inicio */}
          <div className="list-container-in">
            <FontAwesomeIcon icon={faUser} />
            &nbsp;&nbsp;&nbsp;Jesús David &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              title="Llamar"
              className="text-rigth"
              icon={faPhone}
            />
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              title="Mensaje"
              className="text-rigth"
              icon={faFacebookMessenger}
            />
          </div>
          <div className="list-container-out">
            <FontAwesomeIcon icon={faUser} />
            &nbsp;&nbsp;&nbsp;Jacob Moritz &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              title="Llamar"
              className="text-rigth"
              icon={faPhone}
            />
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              title="Mensaje"
              className="text-rigth"
              icon={faFacebookMessenger}
            />
          </div>
          <div className="list-container-in">
            <FontAwesomeIcon icon={faUser} />
            &nbsp;&nbsp;&nbsp;José Rendón &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              title="Llamar"
              className="text-rigth"
              icon={faPhone}
            />
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              title="Mensaje"
              className="text-rigth"
              icon={faFacebookMessenger}
            />
          </div>
          <div className="list-container-in">
            <FontAwesomeIcon icon={faUser} />
            &nbsp;&nbsp;&nbsp;Juan Giraldo &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              title="Llamar"
              className="text-rigth"
              icon={faPhone}
            />
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              title="Mensaje"
              className="text-rigth"
              icon={faFacebookMessenger}
            />
          </div>
          <div className="list-container-out">
            <FontAwesomeIcon icon={faUser} />
            &nbsp;&nbsp;&nbsp;Jesús David &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              title="Llamar"
              className="text-rigth"
              icon={faPhone}
            />
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              title="Mensaje"
              className="text-rigth"
              icon={faFacebookMessenger}
            />
          </div>
          <div className="list-container-out">
            <FontAwesomeIcon icon={faUser} />
            &nbsp;&nbsp;&nbsp;Daniel Jaramillo &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              title="Llamar"
              className="text-rigth"
              icon={faPhone}
            />
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              title="Mensaje"
              className="text-rigth"
              icon={faFacebookMessenger}
            />
          </div>

          {/* Fin */}
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {/* Inicio acordeón */}
          <div class="box">
            <div class="box-item">
              <p class="title">Juan Carvajal</p>
              <ul class="box-item-content">
                <li>Contenido mensaje</li>
              </ul>
            </div>
            <div class="box-item">
              <p class="title">Gilberto Rendón</p>
              <ul class="box-item-content">
                <li>Contenido mensaje</li>
              </ul>
            </div>
            <div class="box-item ">
              <p class="title">Daniel Ospina</p>
              <ul class="box-item-content">
                <li>Contenido mensaje</li>
              </ul>
            </div>
            <div class="box-item">
              <p class="title">Esteban Casas</p>
              <ul class="box-item-content">
                <li>Contenido mensaje</li>
              </ul>
            </div>
          </div>

          {/* Fin acordeón */}
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <p>Información softphone</p>
        </div>
      </div>
    </div>
  );
}

export default SubTabs;
