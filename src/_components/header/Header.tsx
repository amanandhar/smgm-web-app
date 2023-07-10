import { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  CategoryIdContext,
  ICategoryIdContext,
} from "../../context/CategoryIdContext";
import {
  ProductNameContext,
  IProductNameContext,
} from "../../context/ProductNameContext";
import { CategoryDropdown } from "../category-dropdown";
import { SearchBar } from "../search-bar";
import "./Header.css";

export const Header = () => {
  const history = useHistory();

  const { contextCategoryId, updateContextCategoryId } = useContext<
    ICategoryIdContext
  >(CategoryIdContext);

  const { contextProductName, updateContextProductName } = useContext<
    IProductNameContext
  >(ProductNameContext);

  const handleDropdownChange = (value: number) => {
    updateContextCategoryId(value);
  };

  const handleSearchbarChange = (value: string) => {
    updateContextProductName(value);
  };

  return (
    <>
      <div className="sticky-container">
        <header className="smgm-heading1">
          <div className="smgm-navbar" style={{ height: "75px" }}>
            <div
              className="header-title truncate"
              onClick={() => history.push("/")}
            >
              <label className="smgm-company-brand">SMGM </label>
              <label className="smgm-company-name">Online Grocery Store</label>
              <img
                className="smgm-company-logo"
                width="30"
                height="30"
                src={
                  process.env.PUBLIC_URL + "/images/company/company-logo.jpg"
                }
                alt="SMGM"
              />
            </div>
            <div className="smgm-category-element">
              <div className="smgm-category-dropdown">
                <CategoryDropdown
                  onChange={(value) => handleDropdownChange(value)}
                />
              </div>
              <div className="smgm-category-searchbar">
                <SearchBar onChange={(value) => handleSearchbarChange(value)} />
              </div>
            </div>
            <div className="header-title truncate">
              <label className="smgm-company-contact">Call : 01-4351920</label>
            </div>
          </div>
        </header>
        <header className="smgm-heading2">
          <div className="smgm-navbar" style={{ height: "45px" }}>
            <div className="title truncate">
              <label>
                We have all kinds of grocery items which you needed.
              </label>
            </div>
            <div className="title truncate">
              <label>
                Free delivery! Fast delivery!! To all over Kathmandu!!!
              </label>
            </div>

            <div>
              <ul className="links">
                <li>
                  <a href="home" onClick={() => history.push("/home")}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="about-us" onClick={() => history.push("/about-us")}>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="membership"
                    onClick={() => history.push("/membership")}
                  >
                    Membership
                  </a>
                </li>
                <li>
                  <a href="service" onClick={() => history.push("/service")}>
                    Service
                  </a>
                </li>
                <li>
                  <a href="contact" onClick={() => history.push("/contact")}>
                    Contact
                  </a>
                </li>
              </ul>
              <div className="toggle-btn">
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
          <div>
            <div className="dropdown-menu open">
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="services">Services</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
