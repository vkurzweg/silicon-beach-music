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
  padding: 0 !important;
`;

function AboutHeader() {
  return (
    <Background className="container">
      <div className="row" style={{ marginTop: '23%', paddingBottom: '5%' }}>
        <div className="col-xs-6">
          <h1 style={{ textAlign: 'center', fontFamily: 'Monoton', color: '#F5F5F5', fontSize: '62px' }}>Ali</h1>
        </div>
        <div className="col-xs-6">
          <img className="img-fluid" style={{ width: '90%' }} src="http://res.cloudinary.com/kurzweg/image/upload/v1498277852/ali.jpg" alt="Ali Memarian" />
        </div>
      </div>
    </Background>
  );
}

AboutHeader.propTypes = {

};

export default AboutHeader;
