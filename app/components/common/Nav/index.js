/**
*
* Nav
*
*/

import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
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
  vertical-align: sub;
  letter-spacing: 2px;
  color: #F5F5F5 !important;
  font-weight: bold;

  &:hover {
    color: #24A5DA;
    text-decoration: none;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  color: #F5F5F5;
  background-color: #000000;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 2%;
  color: #F5F5F5;

  &:hover {
    color: #24A5DA;
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

const style = {
  bg: {
    backgroundColor: '#000000',
    color: '#F5F5F5',
  }
};

class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose(url) {
    this.setState({ open: false });
    browserHistory.push(url);
  }

  render() {
    const brand = <A href="/" style={{ textDecoration: 'none' }}><Image cloudName="kurzweg" publicId="guitartree_watermelon" responsive style={{ width: '50px', height: '50px' }} />Silicon Beach Guitar Lessons</A>;

    return (
      <div>
        <div style={{ position: 'fixed', width: '100%', zIndex: '100', top: '0' }}>
          <StyledAppBar
            title={brand}
            titleStyle={{ textDecoration: 'none' }}
            iconStyleRight={{ color: '#F5F5F5', padding: '1.3%' }}
            showMenuIconButton={false}
            iconElementRight={<IconButton><MenuIcon /></IconButton>}
            onRightIconButtonTouchTap={this.handleToggle}
            style={{ backgroundColor: '#000000' }}
          />
          <div style={{ height: '5px', backgroundColor: '#24A5DA' }}></div>
          <Drawer
            docked={false}
            width={200}
            openSecondary
            open={this.state.open}
            onRequestChange={(open) => this.setState({ open })}
            containerStyle={style.bg}
          >
            <div style={{ paddingTop: '25%' }}>
            {items.map((item, idx) => {
              return (
                <StyledMenuItem key={idx} onTouchTap={this.handleClose.bind(null, item.url)} style={{ color: '#F5F5F5', backgroundColor: '#000000', textTransform: 'uppercase', letterSpacing: '2px', padding: '2%' }}>{item.name}</StyledMenuItem>
              );
            })}
            </div>
          </Drawer>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {

};

export default Nav;
