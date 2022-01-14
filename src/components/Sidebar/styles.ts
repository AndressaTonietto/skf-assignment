import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../style/colors';

export const CustomLink = styled(Link)`
  padding: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 25px;
  text-decoration: none;
  border-radius: 5px;
  color: ${colors.title};

  :hover {
    background-color: ${colors.secondary};
    color: #ffffff;
  }
`;

export const StyledSideBar = styled.div`
  min-height: calc(100vh - 101px);
  padding-top: 20px;
  padding-right: 20px;
  user-select: none;
  min-width: 12rem;
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary};
`;
