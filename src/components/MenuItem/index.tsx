import React, { useState } from 'react';
import { Container, Label, StyledItem } from './styles';

interface MenuItemProps {
  item?: object;
  label: string;
  children?: React.ReactNode;
}

const MenuItem = ({
  item,
  label,
  children,
}: MenuItemProps & React.HTMLAttributes<HTMLDivElement>) => {
  const [active, setActive] = useState(false);

  const logNodeObject = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    console.log('node object', item);
  };

  return (
    <Container onClick={(e) => logNodeObject(e)}>
      <Label
        active={active}
        onClick={() => setActive((prevState) => !prevState)}
      >
        {label}
      </Label>
      <StyledItem active={active}>{children}</StyledItem>
    </Container>
  );
};

export default MenuItem;
