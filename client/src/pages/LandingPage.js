import { ReactComponent as Arrow } from "assets/images/arrow.svg";

const LandingPage = () => {
  return (
    <div className="landing__container">
      <h1>Welcome to our wine ecommerce</h1>
      <a href="/home">Check it out!</a>
      <div className="arrow">
        <Arrow />
      </div>
    </div>
  );
};

export default LandingPage;
