/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #000000;
  font-size: 12px;
  color: #FAFAFA;
  text-align: center;
  letter-spacing: 1.5px;
  bottom: 0;
`;

const Stripe = styled.div`
  height: 5px;
  background-color: #FC527F;
  z-index: 100;
  position: relative;
`;

const Link = styled.a`
  font-family: 'Roboto';
  color: #24A5DA;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  letter-spacing: 2px;
  &:hover {
    color: #FF5349;
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <Background>
      <Stripe />
      <p style={{ marginBottom: '0' }}>Copyright SBGL 2017 &nbsp;<img style={{ width: '40px', height: '40px' }} src="http://res.cloudinary.com/kurzweg/image/upload/v1497936951/guitartree_blue.png" alt="silicon beach guitar lessons logo" />&nbsp; Website by <Link href="http://www.v-k.la/" target="blank">VK/LA</Link></p>
    </Background>
  );
}

Footer.propTypes = {

};

export default Footer;
