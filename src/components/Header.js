import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Logo />
        <User username="gabriel" />
      </div>
    </div>
  );
};

export default Header;
