import { useAuth } from 'hooks';

import { NavigationStyles, NavItem } from './Navigation.styled';

import { AiOutlineHome } from 'react-icons/ai';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationStyles>
      <NavItem to="/">
        <AiOutlineHome size={24} outline="#0000a0" />
        <span>Home</span>
      </NavItem>
      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </NavigationStyles>
  );
};
