/**
*
* AboutHeader
*
*/

import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #000000;
  width: 100%;
`;

function AboutHeader() {
  return (
    <Background className="container">
      <div className="row" style={{ marginTop: '23%', paddingBottom: '5%' }}>
        <div className="col-xs-6">
          <h1 style={{ textAlign: 'center', fontFamily: 'Monoton', color: '#F5F5F5', fontSize: '36px', padding: '5%' }}>Contact</h1>
        </div>
        <div className="col-xs-6">
          <img className="img-fluid" style={{ width: '70%', display: 'block', margin: '0 auto' }} src="http://res.cloudinary.com/kurzweg/image/upload/v1499380920/piano.jpg" alt="piano stock image" />
        </div>
      </div>
    </Background>
  );
}

AboutHeader.propTypes = {

};

export default AboutHeader;
