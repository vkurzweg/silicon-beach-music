/**
*
* Hero
*
*/

import React from 'react';
import styled from 'styled-components';
// import { Image } from 'cloudinary-react';

const StyledHeader = styled.h1`
  color: #F5F5F5;
  font-family: 'Monoton';
  text-align: center;
  padding-top: 15%;
  font-size: 72px;
  font-weight: normal;
`;

const StyledBtn1 = styled.button`
  width: 100%;
  text-align: center;
  font-family: 'Monoton';
  background-color: #FC527F;
  border: none;
  height: 3em;
`;

function Hero() {
  return (
    <div>
      <div style={{ backgroundImage: 'url(http://res.cloudinary.com/kurzweg/image/upload/v1499375519/mixer.jpg)', height: '350px', backgroundSize: 'cover' }}>
      </div>
    </div>
  );
}

Hero.propTypes = {

};

export default Hero;

// <StyledHeader>
//   Learn to Play in L.A.
// </StyledHeader>


// <span style={{ color: '#FF5349' }}>L</span>ea<span style={{ color: '#FC527F' }}>r</span>n t<span style={{ color: '#24A5DA' }}>o</span> Pl<span style={{ color: '#FF5349' }}>a</span>y i<span style={{ color: '#FC527F' }}>n</span> L.A.</span>

// <h3 style={{ color: '#F5F5F5', textAlign: 'center', fontSize: '36px', fontFamily: 'Josefin Sans', textTransform: 'uppercase' }}>Lessons from $69</h3>

