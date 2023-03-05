import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 24px;
  font-weight: 700;
  color: #5218fa;

  &.active {
    color: #400080;
    text-shadow: 0 4px 4px #5218fa;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #5218fa;
  }
`;
