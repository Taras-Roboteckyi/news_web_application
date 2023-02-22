import { NavList, MenuItem, MenuLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav aria-label="Finance ledger">
      <NavList role="menubar" aria-label="Finance ledger menu">
        <MenuItem role="none">
          <MenuLink role="menuitem" href="#home">
            Home
          </MenuLink>
        </MenuItem>
        <MenuItem role="none">
          <MenuLink role="menuitem" href="#about">
            About
          </MenuLink>
        </MenuItem>
        <MenuItem role="none">
          <MenuLink role="menuitem" href="#cases">
            Cases
          </MenuLink>
        </MenuItem>
        <MenuItem role="none">
          <MenuLink role="menuitem" href="#blog">
            Blog
          </MenuLink>
        </MenuItem>
        <MenuItem role="none">
          <MenuLink role="menuitem" href="#contact">
            Contact
          </MenuLink>
        </MenuItem>
      </NavList>
    </nav>
  );
};
