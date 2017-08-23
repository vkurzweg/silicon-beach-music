/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';


const Background = styled.div`
  background-color: #000000;
  font-size: 12px;
  color: #FAFAFA;
  text-align: center;
  letter-spacing: 1.5px;
  bottom: 0;
  padding: 1%;
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
      <p style={{ textAlign: 'center' }}>
        <a href="https://www.instagram.com/siliconbeachguitar" target="blank"><Image cloudName="kurzweg" publicId="instagram-min" quality="auto" responsive style={{ padding: '2%', textAlign: 'center' }} /></a>
        <a href="https://www.facebook.com/siliconbeachguitar" target="blank"><Image cloudName="kurzweg" publicId="facebook-min" quality="auto" responsive style={{ padding: '2%', textAlign: 'center' }} /></a>
        <a href="https://twitter.com/SiliconBeachGTR" target="blank"><Image cloudName="kurzweg" publicId="twitter-min" quality="auto" responsive style={{ padding: '2%', textAlign: 'center' }} /></a>
        <a style={{ paddingLeft: '10px', display: 'inline-block' }} href="siliconbeachguitarlessons.business.site" target="blank"><Image cloudName="kurzweg" publicId="google" responsive alt="google icon" style={{ paddingLeft: '15px' }} /></a>
      </p>
      <p style={{ marginBottom: '0' }}>Copyright SBGL 2017 &nbsp;<img style={{ width: '40px', height: '40px' }} src="http://res.cloudinary.com/kurzweg/image/upload/v1497936951/guitartree_blue.png" alt="silicon beach guitar lessons logo" />&nbsp; Website by <Link href="http://www.vk.digital" target="blank">vk.digital</Link></p>
    </Background>
  );
}

Footer.propTypes = {

};

export default Footer;

// <a href="" target="blank"><Image cloudName="kurzweg" publicId="yelp-min" quality="auto" responsive style={{ padding: '2%', textAlign: 'center' }} /></a>
// <a href="" target="blank"><Image cloudName="kurzweg" publicId="tripadvisor-min" quality="auto" responsive style={{ padding: '2%', textAlign: 'center' }} /></a>

