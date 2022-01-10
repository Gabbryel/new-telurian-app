import { Fragment } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Title from "../Title/Title";
import ItemsContainer from "../ItemsContainer/ItemsContainer";

const Order = () => {
  return(
    <Fragment>
      <HamburgerMenu />
      <Title />
      <ItemsContainer/>
    </Fragment>
  )
}

export default Order;