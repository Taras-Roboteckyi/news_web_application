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
      </NavList>
    </nav>
  );
};
