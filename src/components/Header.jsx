const HeaderComponent = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://icons.iconarchive.com/icons/sonya/swarm/256/Fast-Food-icon.png"
        ></img>
      </div>
      <div>
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
