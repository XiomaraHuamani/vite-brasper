import styled from 'styled-components';

// Estilos con styled-components
const FormContainer = styled.div`
  background: white;
  padding: 50px;
  border-radius: 30px; /* Aumentado el border-radius */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  max-width: 600px; /* Más ancho */
  margin: 50px auto;
  text-align: center;
`;

const FormTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
`;

const FormRow = styled.div`
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px; /* Añadido border-radius */
  overflow: hidden;
`;

const Flag = styled.span`
  padding: 15px;
  background-color: #f0f0f0;
  border-right: 1px solid #ccc;
  font-size: 18px;
`;

const Input = styled.input`
  border: none;
  padding: 15px;
  flex: 1;
  outline: none;
  font-size: 16px;
`;

const Details = styled.div`
  text-align: left;
  margin-bottom: 25px;
  font-size: 16px;
  color: #333;
  line-height: 1.8; /* Ajuste para mayor separación entre líneas */
  & span {
    color: red;
    float: right;
  }
`;

const Highlight = styled.h4`
  color: #007bff;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const TermsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

const Terms = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 10px;
  & span {
    color: #007bff;
    margin-left: 5px;
    text-decoration: none;
    cursor: pointer;
  }
`;


const FormCalculator = () => {
  return (
    <FormContainer>
      <FormTitle>Ingrese el Monto a Enviar</FormTitle>
      <FormRow>
        <InputGroup>
          <Flag>🇵🇪</Flag>
          <Input type="number" placeholder="Enviar" />
        </InputGroup>
      </FormRow>

      <Details>
        <div>Comisión 0: <span>0</span></div>
        <div>Impuestos: <span>0</span></div>
        <div>Total a Enviar: <span>0</span></div>
        <div>Tipo de Cambio: <span>0</span></div>
      </Details>

      <Highlight>Recibe</Highlight>
      <FormRow>
        <InputGroup>
          <Flag>🇧🇷</Flag>
          <Input type="number" placeholder="Recibir" />
        </InputGroup>
      </FormRow>

      <TermsWrapper>
        <Terms>
          <input type="checkbox" id="terms" style={{ marginRight: '10px' }} />
          <label htmlFor="terms">
            Acepto
            <span>Términos y Condiciones</span>
          </label>
        </Terms>
        <div className='centrar'>
          <button className='button-baground-blue mt-1'>
            Enviar Dinero
          </button>
        </div>
        
      </TermsWrapper>
    </FormContainer>
  );
};

export default FormCalculator;
