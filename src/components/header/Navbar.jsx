import "./navbar.scss";


function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={"./logo.svg"} alt="" />
        <span>ABD Admin</span>
      </div>
      <div className="icons">
        <img src={"./search.svg"} alt="" className="icon" />
        <img src={"./app.svg"} alt="" className="icon" />
        <img src={"./expand.svg"} alt="" className="icon" />
        <div className="notification">
          <img src={"./notifications.svg"} alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/19062641/pexels-photo-19062641/free-photo-of-a-man-in-a-green-shirt-and-pants-holding-a-glass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          <span>Abd</span>
        </div>
        <img src={"./settings.svg"} alt="" className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
