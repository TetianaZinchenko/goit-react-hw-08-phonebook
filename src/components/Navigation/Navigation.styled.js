import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const NavigationStyles = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  padding: 24px;
  font-weight: 700;
  color: #5218fa;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #400080;
    text-shadow: 0 4px 4px #5218fa;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #5218fa;
  }
`;
