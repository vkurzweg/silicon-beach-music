/**
*
* Nav
*
*/

import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu';
import { browserHistory } from 'react-router';
import { Image } from 'cloudinary-react';

const StyledAppBar = styled(AppBar)`
  width: 100%;
  background: #000000;
`;

const A = styled.a`
  font-family: 'Poiret One';
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  margin-top: 1%;
  padding-top: 1%;
  color: #F5F5F5 !important;
  font-weight: bold;

  &:hover {
    color: #24A5DA;
    text-decoration: none;
  }
`;

const items = [
  {
    name: 'Rates',
    url: '/rates',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
];

class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

Nav.propTypes = {

};

export default Nav;
