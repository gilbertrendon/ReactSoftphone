// export class Tabs extends Component {

//   constructor(props, context) {
//       super(props, context);
//       this.state = {
//           activeTabIndex: this.props.defaultActiveTabIndex
//       };
//       this.handleTabClick = this.handleTabClick.bind(this);
//   }

//   // Toggle currently active tab
//   handleTabClick(tabIndex) {
//       this.setState({
//           activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
//       });
//   }

//   // Encapsulate <Tabs/> component API as props for <Tab/> children
//   renderChildrenWithTabsApiAsProps() {
//       return React.Children.map(this.props.children, (child, index) => {
//           return React.cloneElement(child, {
//               onClick : this.handleTabClick,
//               tabIndex: index,
//               isActive: index === this.state.activeTabIndex
//           });
//       });
//   }

//   // Render current active tab content
//   renderActiveTabContent() {
//       const {children} = this.props;
//       const {activeTabIndex} = this.state;
//       if(children[activeTabIndex]) {
//           return children[activeTabIndex].props.children;
//       }
//   }

//   render() {
//       return (
//           <div className="tabs">
//               <ul className="tabs-nav nav navbar-nav navbar-left">
//                   {this.renderChildrenWithTabsApiAsProps()}
//               </ul>
//               <div className="tabs-active-content">
//                   {this.renderActiveTabContent()}
//               </div>
//           </div>
//       );
//   }
// };

import { useState } from "react";
import "./Tabs.css";
import "./App.css";


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
function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <button className="button-left" title="Softphone">
            <FontAwesomeIcon icon={faPhone} />
          </button>
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <button title="Contactos">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <button  title="Configuración">
            <FontAwesomeIcon icon={faCogs} />
          </button>
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {/* Inicio */}

          <div className="softphone-grid">
            <br></br>
            <input className="output" />
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>
              <b className="bigPlus">*</b>
            </button>
            <button>0</button>
            <button>
              <b className="bigPlus">#</b>
            </button>
            <button>
              <FontAwesomeIcon icon={faPhone} />
            </button>
            <button>
              <b className="bigPlus">+</b>
            </button>
            <button>
              <FontAwesomeIcon icon={faFacebookMessenger} />
            </button>
          </div>
          {/* Fin */}
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {/* <div
            type="select"
            label="Multiple Select"
            multiple
            className="history-container-tabs"
          >
            <option value="select" className="history-element">
              Juan
            </option>
            <option value="select" className="history-element">
              Roman Urrego
            </option>
            <option value="select" className="history-element">
              Jacob Moritz
            </option>
            <option value="select" className="history-element">
              Juan David Mejia
            </option>
          
          </div> */}
          {/* Grid contactos con ícono */}
          <div className="list-container">
            <FontAwesomeIcon icon={faUser}/>
            &nbsp;&nbsp;&nbsp;Jesús David
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon title="Llamar" className="text-rigth" icon={faPhone}/>
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon title="Mensaje" className="text-rigth" icon={faFacebookMessenger}/>
          </div>
          <div className="list-container">
            <FontAwesomeIcon icon={faUser}/>
            &nbsp;&nbsp;&nbsp;Jacob Moritz
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon title="Llamar" className="text-rigth" icon={faPhone}/>
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon title="Mensaje" className="text-rigth" icon={faFacebookMessenger}/>
          </div>
          <div className="list-container">
            <FontAwesomeIcon icon={faUser}/>
            &nbsp;&nbsp;&nbsp;José Rendón
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon title="Llamar" className="text-rigth" icon={faPhone}/>
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon title="Mensaje" className="text-rigth" icon={faFacebookMessenger}/>
          </div>
          <div className="list-container">
            <FontAwesomeIcon icon={faUser}/>
            &nbsp;&nbsp;&nbsp;Juan Giraldo
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon title="Llamar" className="text-rigth" icon={faPhone}/>
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon title="Mensaje" className="text-rigth" icon={faFacebookMessenger}/>
          </div>
          <div className="list-container">
            <FontAwesomeIcon icon={faUser}/>
            &nbsp;&nbsp;&nbsp;Jesús David
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon title="Llamar" className="text-rigth" icon={faPhone}/>
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon title="Mensaje" className="text-rigth" icon={faFacebookMessenger}/>
          </div>
          <div className="list-container">
            <FontAwesomeIcon icon={faUser}/>
            &nbsp;&nbsp;&nbsp;Daniel Jaramillo
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon title="Llamar" className="text-rigth" icon={faPhone}/>
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon title="Mensaje" className="text-rigth" icon={faFacebookMessenger}/>
          </div>
          {/* Fin grid contactos con ícono */}
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <p>Configuración</p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
