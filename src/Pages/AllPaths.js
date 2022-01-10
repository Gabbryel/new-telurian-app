import { Fragment } from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faShoppingCart, faTshirt } from "@fortawesome/free-solid-svg-icons";
const AllPaths = () => {
  return(
    <Fragment>
      <h3 id='out'>OUT NOW</h3>
      <Title />
      <div id="no-route-menu">
        <p>This page does not exists. Choose below a valid route!</p>
        <Link to='/'><FontAwesomeIcon icon={faInfoCircle} /></Link>
        <Link to='/order'><FontAwesomeIcon icon={faShoppingCart} /></Link>
        <Link to='/merch'><FontAwesomeIcon icon={faTshirt} /></Link>
      </div>
    </Fragment>
  )
}

export default AllPaths;