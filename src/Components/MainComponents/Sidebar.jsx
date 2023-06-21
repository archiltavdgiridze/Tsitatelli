import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faHouse,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(""); // State variable to store the active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar">
      <div className="sidebar_title">
        <Link to="/" className="sidebar_logo">
          <h1>ციტატელი</h1>
        </Link>
      </div>
      <div className="sidebar_content">
        <ul>
          <li>
            <Link
              to="/"
              className={`sidebar-links ${
                activeLink === "home" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("home")}
              alt="home-button"
            >
              <span>
                <FontAwesomeIcon icon={faHouse} />
              </span>
              <p className="sidebar-texts">მთავარი</p>
            </Link>
          </li>
          <li>
            <Link
              to="/filter"
              className={`sidebar-links ${
                activeLink === "filter" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("filter")}
              alt="sources-button"
            >
              <span>
                <FontAwesomeIcon icon={faFilter} />
              </span>
              <p className="sidebar-texts">ფილტრი</p>
            </Link>
          </li>
          <li>
            <Link
              to="/about_us"
              className={`sidebar-links ${
                activeLink === "about" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("about")}
              alt="about-us-button"
            >
              <span>
                <FontAwesomeIcon icon={faCircleInfo} />
              </span>
              <p className="sidebar-texts">ჩვენს შესახებ</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
