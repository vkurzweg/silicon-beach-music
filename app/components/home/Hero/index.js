/**
*
* Hero
*
*/

import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';

const StyledHeader = styled.h1`
  color: #FFFFFF;
  font-family: 'Monoton';
  text-align: center;
  padding-top: 20%;
  font-size: 50px;
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
      <div style={{ backgroundImage: 'url(http://res.cloudinary.com/kurzweg/image/upload/v1499375519/mixer.jpg)', height: '450px', backgroundSize: 'cover' }}>
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
// <h3 style={{ color: '#FFFFFF', textAlign: 'center', fontSize: '30px' }}>Professional instruction from $69</h3>

