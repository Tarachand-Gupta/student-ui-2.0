import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ toggle, setToggle }) => {
  return (
    <div className={`l-navbar ${toggle && "show"}`} id="nav-bar">
      <nav className="nav">
        <div>
          <Link to="/">
            <a href="#" className="nav__logo">
              {!toggle && "St."}
              {toggle && <span className="nav__logo-name">Student.</span>}
            </a>
          </Link>

          <div className="nav__list">
            <Link to="/NoticeBoard">
              <a href="#" className="nav__link active">
                <i className="bx bx-grid-alt nav__icon"></i>
                <span className="nav__name">Noticeboard</span>
              </a>
            </Link>

            <Link to="/Profile">
              <a href="#" className="nav__link">
                <i className="bx bx-user nav__icon"></i>
                <span className="nav__name">Profile</span>
              </a>
            </Link>

            <Link to="/Messaging">
              <a href="#" className="nav__link">
                <i className="bx bx-message-square-detail nav__icon"></i>
                <span className="nav__name">Messages</span>
              </a>
            </Link>

            <Link to="/Notes">
              <a href="#" className="nav__link">
                <i className="bx bx-book-open nav__icon"></i>
                <span className="nav__name">Notes</span>
              </a>
            </Link>

            <Link to="/Soon">
              <a href="#" className="nav__link">
                <i className="bx bx-folder nav__icon"></i>
                <span className="nav__name">Data</span>
              </a>
            </Link>

            <Link to="/Soon">
              <a href="#" className="nav__link">
                <i className="bx bx-bar-chart-alt-2 nav__icon"></i>
                <span className="nav__name">Analytics</span>
              </a>
            </Link>
          </div>
        </div>

        <Link to="/SignOut">
          <a href="#" className="nav__link">
            <i className="bx bx-log-out nav__icon"></i>
            <span className="nav__name">Log Out</span>
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
