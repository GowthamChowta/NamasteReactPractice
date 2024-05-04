const ResCard = ({ resName, cuisine }) => {
  return (
    <div className="res-card">
      <img
        className="res-card-logo"
        src="https://www.chipotle.com/content/dam/chipotle/menu/meal-types/lifestyle-bowl/mobile-app/order.png"
      ></img>
      <h3 className="res-card-title">{resName}</h3>
      <h4 className="res-card-cuisine">{cuisine}</h4>
      <h4 className="res-card-rating">4.5 ⭐️</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-cards">
        <ResCard resName="Chipotle" cuisine="Mexican, American" />
        <ResCard resName="Five Guys" cuisine="American, Burgers" />
        <ResCard resName="McDonalds" cuisine="American, Fast Food" />
      </div>
    </div>
  );
};

export default BodyComponent;
