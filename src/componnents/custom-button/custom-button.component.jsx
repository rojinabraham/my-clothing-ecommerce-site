import React from "react";
// import "./custom-button.styles.scss";
import { CustomButtonContainer } from "./custom-button.styles";

function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}

// function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
//   return (
//     <button
//       className={`${inverted ? "inverted" : ""} {${
//         isGoogleSignIn ? "google-sign-in" : ""
//       } custom-button`}
//       {...otherProps}
//     >
//       {children}
//     </button>
//   );
// }

export default CustomButton;
