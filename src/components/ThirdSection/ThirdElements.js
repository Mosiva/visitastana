import styled from "styled-components";
import flamingo from '../../images/flamingo.jpg'

export const ThirdContainer = styled.div`
  background-size: contain;
  background: url(${flamingo});;;
  padding: 0 30px;
  height: 768px;
  z-index: 1;
  @media only screen and (max-width: 480px) {
    height: 1500px;
  }
  @media only screen and (max-width: 900px) {
    height: 1500px;
  }
`;

export const ThirdBg = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
