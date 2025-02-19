import logo from "../images/react.png";

function Header() {
  return (
    <div className="pt-3  pl-2" style={{ borderBottom: "1px solid #777" }}>
      <img src={logo} style={{ height: "35px", verticalAlign: "top" }}></img>
      <span className="h2 pt-4  text-white-50">TravelOPedia</span>
    </div>
  );
}

export default Header;
