import React from "react";

const Topbar = ({ toggle, setToggle }) => {
  return (
    <div>
      <header className={`header ${toggle && "body-pd"}`} id="header">
        <div className="header__toggle" onClick={() => setToggle(!toggle)}>
          <i
            className={`bx ${!toggle && "bx-menu"} ${toggle && "bx-x"}  `}
            id="header-toggle"
          ></i>
        </div>
        <div>
          <h1>Student.</h1>
        </div>
        <div className="header__img">
          <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" />
        </div>
      </header>
    </div>
  );
};

export default Topbar;
