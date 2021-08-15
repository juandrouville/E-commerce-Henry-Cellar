import background from "assets/images/background-definitivo.jpeg";
import { ReactComponent as Arrow } from "assets/images/arrow.svg";

const LandingPage = () => {
  return (
    <div className="catalogo__container">
      <img src={background} alt="Henry" />
      <h1>we have more than 90 varieties of wines</h1>
      <p>check out</p>
      <div className="arrow">
        <Arrow />
      </div>
    </div>
  );
};

export default LandingPage;
