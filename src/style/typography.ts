import styled from "styled-components";
import { colors } from "./colors";

export const Title = styled.span`
  font-weight: bold;
  font-size: 25px;
  line-height: 80px;
  color: ${colors.title};
  text-transform: capitalize;
`;

export const MenuLabel = styled.span`
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  color: ${colors.title};
  text-transform: capitalize;
`;

export const Subtitle = styled.span`
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  color: ${colors.title};
  text-transform: capitalize;
`;

export const Text = styled.span`
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: ${colors.text};
  text-transform: capitalize;
`;
