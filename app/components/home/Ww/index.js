/**
*
* Ww
*
*/

import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url('http://res.cloudinary.com/kurzweg/image/upload/v1499379497/palms.jpg');
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5%;
`;

const Content = styled.div`
  background-color: rgba(43, 46, 37, .9);
  width: 75%;
  margin: 0 auto;
  color: #F5F5F5;
  text-align: center;
  padding: 3%;
  border-radius: 5px;
  font-family: 'Josefin Sans';
`;

function Ww() {
  return (
    <Background>
      <Content>
        <h4 style={{ fontSize: '26px', letterSpacing: '2px', textTransform: 'uppercase' }}>Join Us for Wine Wednesdays!</h4>
        <p style={{ lineHeight: '1.5em', fontSize: '16px' }}>Students will be invited to an evening of free flowing wine, desserts and music!  Students can perform, jam or just enjoying sharing in conversation about music with other students and Silicon Beach Guitar Lesson teachers.  Special music industry guest performers and lecturers will also regularly be featured to share their experiences and advice with students.  By invite only.</p>
      </Content>
    </Background>
  );
}

Ww.propTypes = {

};

export default Ww;
