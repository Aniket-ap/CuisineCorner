import React, { useContext } from "react";
import Logo from "../assets/image/vectorstock_33649353.png";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../utils/context/userContext";
// import UserContext from "../utils/context/userContext";
import { useSelector } from "react-redux";
import { useAuth } from "../utils/context/useAuth";

const Title = () => {
  return (
    <>
      <img className="logo" src={Logo} alt="logo" />
    </>
  );
};

const Header = () => {
  // const {user} = useContext(UserContext)
  const [name, setName] = useUser();
  const [auth, setAuth] = useAuth();
  const cartItems = useSelector((store) => store.cart.items);

  const navigate = useNavigate();

  const onHandleLogout = () => {
    setAuth({ ...auth, user: null });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center flex-wrap shadow-lg p-2 sticky top-0 z-10 bg-white">
      <Link to="/">
        <h1 className="text-xl font-semibold text-white cursor-pointer px-10">
          <span className="gradient-text">CUISINECORNER</span>
        </h1>
      </Link>

      <div className="nav-items">
        <ul className="flex flex-wrap">
          <li className="p-3 cursor-pointer hover:text-orange-500 transition duration-300 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 cursor-pointer hover:text-orange-500 transition duration-300 ease-in-out">
            <Link to="/about">About</Link>
          </li>
          <li className="p-3 cursor-pointer hover:text-orange-500 transition duration-300 ease-in-out">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="p-3 cursor-pointer hover:text-orange-500 transition duration-300 ease-in-out">
            <Link to="/cart">
              <i class="fas fa-shopping-cart mx-1 text-orange-500"></i>
              {cartItems.length > 0 && (
                <span class="bg-black text-white px-2 rounded-full text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
          <li className="p-3 cursor-pointer hover:text-orange-500 transition duration-300 ease-in-out">
            {!auth.user ? (
              <>
                <Link to="/login">
                  <i class="fa-solid fa-user mx-1 text-orange-500"></i>
                  <span>Sign in</span>
                </Link>
              </>
            ) : (
              <>
                <i class="fa-solid fa-user mx-1 text-orange-500"></i>
                <span className="text-black">{auth?.user?.name}</span>
              </>
            )}
          </li>
          <li className="p-3 cursor-pointer hover:text-orange-500 transition duration-300 ease-in-out">
            {auth.user ? (
              <>
                <p onClick={onHandleLogout}>Logout</p>
              </>
            ) : null}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
