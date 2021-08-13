import background from "assets/images/background-definitivo.jpeg";

const LandingPage = () => {
  return (
    <div className="catalogo__container">
      <img src={background} alt="Henry" />
      <div>
        <a className="link" href="/catalog">
          Shop now
        </a>
      </div>
      <h1>Find the perfect wine for you.</h1>
    </div>
  );
};

export default LandingPage;
