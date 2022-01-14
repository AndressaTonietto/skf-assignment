import styled from "styled-components";
import { colors } from "../../style/colors";
import { MenuLabel } from "../../style/typography";

export const Container = styled.div`
  padding-left: 20px;
  margin: 0 0 5px 5px;
`;

export const Label = styled(MenuLabel)<{
  active: boolean;
}>`
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 5px;

  &::after {
    margin-left: 5px;
    content: '';
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #000;
    transform: ${({ active }) => (active ? 'rotate(0deg)' : 'rotate(-90deg)')};
  }

  :hover {
    background-color: ${colors.secondary};
    color: #ffffff;
  }
`;

export const StyledItem = styled.div<{
  active: boolean;
}>`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  flex-direction: column;
`;
