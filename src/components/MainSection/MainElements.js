import styled from "styled-components";
import BackgroundMain from "../../images/BackgroundMain.png";

export const MainContainer = styled.div`
  background-size: contain;
  background: url(${BackgroundMain});
  padding: 0 30px;
  height: 800px;
  z-index: 1;
  @media only screen and (max-width: 480px){
    height: 900px;
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

