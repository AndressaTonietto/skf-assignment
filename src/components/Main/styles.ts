import styled from 'styled-components';
import { colors } from '../../style/colors';

export const Img = styled.img`
  margin-top: 20px;
  object-fit: contain;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Loader = styled.div`
  margin: auto;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    border: 4px solid ${colors.secondary};
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;
