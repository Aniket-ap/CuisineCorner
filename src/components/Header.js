import React, {useContext} from "react";
import Logo from "../assets/image/vectorstock_33649353.png";
import { Link } from "react-router-dom";
import { useUser } from "../utils/context/userContext";
// import UserContext from "../utils/context/userContext";

const Title = () => {
  return (
    <>
      <img className="logo" src={Logo} alt="logo" />
    </>
  );
};

const Header = () => {
  // const {user} = useContext(UserContext)
  const [name, setName] = useUser()
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          
          <li>Cart</li>
          <li className="font-bold p-4 text-red-900">{name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
