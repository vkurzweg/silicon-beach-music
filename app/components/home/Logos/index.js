/**
*
* Logos
*
*/

import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';

const Background = styled.div`
  background-color: #000000;
  color: #F5F5F5;
  padding-top: 2%;
  margin: 0 auto;
  width: 100%;
  font-family: 'Josefin Sans';
`;

function Logos() {
  return (
    <Background className="container">
      <div className="row" style={{ paddingBottom: '3%', width: '90%', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', fontSize: '26px', letterSpacing: '2px', textTransform: 'uppercase' }}>Our Instructors</h3>
        <h4 style={{ display: 'block', width: '75%', margin: '0 auto', lineHeight: '200%', padding: '3%', fontFamily: 'Josefin Sans' }}>Make music industry connections by becoming part of the Silicon Beach Guitar network. Our instructors have worked with award-winning editors to create outstanding television and entertainment.</h4>
        <div className="col-sm-3">
          <Image cloudName="kurzweg" publicId="top_chef_emmy" responsive quality="auto" style={{ padding: '5%', width: '90%' }} />
        </div>
        <div className="col-sm-3">
          <Image cloudName="kurzweg" publicId="project_runway" responsive quality="auto" style={{ padding: '5%', width: '90%' }} />
        </div>
        <div className="col-sm-3">
          <Image cloudName="kurzweg" publicId="who-do-you-think" responsive quality="auto" style={{ padding: '5%', width: '90%' }} />
        </div>
        <div className="col-sm-3">
          <Image cloudName="kurzweg" publicId="project_greenlight" responsive quality="auto" style={{ padding: '5%', width: '90%' }} />
        </div>
      </div>
    </Background>
  );
}

Logos.propTypes = {

};

export default Logos;
