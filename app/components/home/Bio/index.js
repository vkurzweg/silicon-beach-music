/**
*
* Bio
*
*/

import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #000000;
  color: #F5F5F5;
  padding-top: 2%;
  margin: 0 auto;
  width: 100%;
  font-family: 'Josefin Sans';
`;

const Image = styled.img`
  max-height: 400px;
  padding: 3%;
  display: block;
  margin: 0 auto;
  margin-top: -5%;
`;

function Bio() {
  return (
    <Background className="container">
      <h3 style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '2%' }}>Meet the Owner</h3>
      <div className="row" style={{ paddingBottom: '5%' }}>
        <div className="col-sm-6">
          <Image src="http://res.cloudinary.com/kurzweg/image/upload/v1498093819/ali1.jpg" alt="Ali Memarian" />
        </div>
        <div className="col-sm-6">
          <p style={{ paddingTop: '10%', fontSize: '16px', lineHeight: '2em' }}>With over twenty years of experience playing guitar, a decade of songwriting and producing songs for feature films and composing for internationally syndicated television and advertisement, Ali Memarian's extensive list of credits is only matched by his passion for imparting the enthusiasm for music he still feels every time he picks up a guitar or heads into the studio.</p>
        </div>
      </div>
    </Background>
  );
}

Bio.propTypes = {

};

export default Bio;
