import { Component, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

// class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>{(AuthContext)=> (
//       <ThemeContext.Consumer>
//         {(ThemeContext) => {
//           const { isAuthenticated,toggleAuth } = AuthContext;
//           const { isLightTheme, light, dark } = ThemeContext;
//           const theme = isLightTheme ? light : dark;
//           return (
//             <nav style={{ background: theme.ui, color: theme.syntax }}>
//               <h3>Navbar</h3>
//               <div style={{cursor:'pointer'}} onClick={toggleAuth}>{isAuthenticated ? 'logged in' : 'logged out'}</div>
//               <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//               </ul>
//             </nav>
//           );
//         }}
//       </ThemeContext.Consumer>)}
//       </AuthContext.Consumer>
//     );
//   }
// }
// import React from 'react'

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated,toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h3>Navbar</h3>
        <div style={{cursor:'pointer'}} onClick={toggleAuth}>{isAuthenticated ? 'logged in' : 'logged out'}</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar;


