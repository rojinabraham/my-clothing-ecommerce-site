import React from "react";
// import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  WelcomeContainer,
} from "./header.styles.jsx";

function Header({ currentUser, hidden }) {
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <HeaderContainer>
      <WelcomeContainer className="welcome">
        {/* {currentUser && `Welcome, ${currentUser.currentUser.displayName}`} */}
      </WelcomeContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>

        {currentUser ? (
          <OptionLink as="div" onClick={handleSignOut}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink className="option" to="/signin">
            Sign In
          </OptionLink>
        )}
        <CartIcon></CartIcon>
      </OptionsContainer>
      {hidden && <CartDropDown />}
    </HeaderContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
