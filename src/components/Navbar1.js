import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Navbar1() {
    return (
        <div id="navbar">
             <div className="first-nav">
                <p> <FontAwesomeIcon icon={faPhone} />  704 - 555 - 5555</p> 
                <p> <FontAwesomeIcon icon={faEnvelope} />  info555@LawnTechLandscaping.com</p>
            </div>
        </div>
    )
}