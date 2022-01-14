import React from 'react';
import MenuItem from '../MenuItem';
import { menuItems } from './menuItems';
import { CustomLink, StyledSideBar } from './styles';

interface InfoProps {
  label: string;
  path: string;
}

interface MenuItemProps {
  name: string;
  children?: MenuItemProps[] | InfoProps[];
}

const Sidebar = () => {
  const DisplayMenuItem = (array: MenuItemProps[]) => (
    <>
      {array.map((item: any) =>
        item.children ? (
          <MenuItem label={item.name} item={item}>
            {DisplayMenuItem(item.children)}
          </MenuItem>
        ) : (
          <CustomLink to={item.path}>{item.label}</CustomLink>
        )
      )}
    </>
  );
  return <StyledSideBar>{DisplayMenuItem(menuItems)}</StyledSideBar>;
};

export default Sidebar;
