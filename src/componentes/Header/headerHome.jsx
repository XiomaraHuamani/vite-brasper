//import FormCalculator from '../forms/formCalculator';
import Calculator from '../Calculator/Calculator';

const HeaderHome = () => {
  return (
    <div className="header-home-container">
      <div className="content-wrapper">
        <div className="header-content">
          <h1>
            <span>Tu envío llega en </span>
            <span className="highlight">Minutos</span> y Directo a tu 
            <span className="highlight"> Cuenta de Destino</span>!
          </h1>
          <p>Confianza, rapidez y seguridad en sus envíos</p>
          <button className="button-baground-blue mt-1">
            Invita aquí y gana tu bonus Brasper ➔
          </button>
        </div>
        {/* <FormCalculator /> */}
        <Calculator />
      </div>
    </div>
  );
};

export default HeaderHome;
