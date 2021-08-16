import { ReactComponent as Arrow } from "assets/images/arrow.svg";

const LandingPage = () => {
  return (
    <div className="catalogo__container">
      <h1>we have more than 90 varieties of wines</h1>
      <a href="/home">Check it out!</a>
      <div className="arrow">
        <Arrow />
      </div>
    </div>
  );
};

export default LandingPage;
