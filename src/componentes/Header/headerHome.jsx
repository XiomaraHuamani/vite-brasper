import React from 'react';
import styled from 'styled-components';
import FormCalculator from '../forms/formCalculator';

// Estilos con styled-components
const HeaderHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(90deg, #0749bb, #3172d4, #8088e0);
  color: white;
  padding: 20px 50px;
  height: 100vh;
  overflow: hidden; /* Evita el scroll */
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  flex-wrap: wrap; /* Permite ajustar contenido si es necesario */
`;

const HeaderContent = styled.div`
  max-width: 50%;
  text-align: left;
`;

const Highlight = styled.span`
  color: #f1c40f;
  font-weight: bold;
`;

const InviteButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #00d1ff;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: #00a8cc;
  }
`;

const HeaderHome = () => {
    return (
        <HeaderHomeContainer>
            <ContentWrapper>
                <HeaderContent>
                    <h1>
                        <span>Tu envío llega en</span> <Highlight>Minutos</Highlight> y Directo a tu <Highlight>Cuenta de Destino</Highlight>!
                    </h1>
                    <p>Confianza, rapidez y seguridad en sus envíos</p>
                    <InviteButton>Invita aquí y gana tu bonus Brasper ➔</InviteButton>
                </HeaderContent>
                <FormCalculator />
            </ContentWrapper>
        </HeaderHomeContainer>
    );
};

export default HeaderHome;
