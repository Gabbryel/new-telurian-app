import { Fragment } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Title from "../Title/Title";
import TShirtsContainer from "../TShirtsContainer/TShirtsContainer";
const Merch = () => {
  return(
    <Fragment>
    <HamburgerMenu />
    <Title />
    <TShirtsContainer />
  </Fragment>
  )
}

export default Merch;