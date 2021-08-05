const ProductDetail = ({ image, name, price, description, stock }) => {
  return (
    <div>
      <div className="product__detail">
        <img
          src="https://cepadevinos.com/wp-content/uploads/2016/09/Paradigma-Blend.jpg"
          alt="Henry"
          width="556"
          height="556"
        />

        <div className="product__data">
          <div className="name__price">
            <h1>Paradigma blend</h1>
            <h1>$500</h1>
          </div>
          <p className="data__description">
            1845. Milán. En su primer laboratorio de la Porta Nuova, Bernardino
            Branca, un singular autodidacta, obtiene una bebida única producto
            de la sabia combinación de hierbas, cortezas, raíces y frutos
            macerados en alcohol. Cuenta con un colaborador, el Dr. Fernet y
            Bernardino decide unir sus nombres para bautizar a su reciente
            creación. Nacía Fernet Branca. Con el tiempo se convertiría en un
            producto y una marca que trascendería las fronteras de Italia para
            expandirse por el mundo. Hoy, la combinación de ingredientes
            naturales obtenidos en distintas partes del mundo, macerados en
            alcohol, respetando estrictamente un proceso que lleva más de 160
            años y que culmina con una paciente maduración de 12 meses en cubas
            de roble de Eslavonia es el secreto de Fernet Branca y constituyen
            su espíritu único.
          </p>
          <p>stock</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
