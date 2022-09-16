import styled from "styled-components";
import MainTwo from "../../images/MainTwo.png";

export const MainContainer = styled.div`
  background-size: contain;
  background: url(${MainTwo});
  height: 400px;
  z-index: 1;
  @media only screen and (max-width: 480px){
    height: 800px;
  }
  @media only screen and (max-width: 900px){ 
    height: 700px;
  }
`;

export const MainBg = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;