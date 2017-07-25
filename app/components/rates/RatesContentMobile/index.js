/**
*
* AboutContent
*
*/

import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  font-family: 'Josefin Sans';
  font-size: 16px;
  width: 85%;
  margin: 0 auto;
  line-height: 2em;
  padding: 2%;
`;

const Table = styled.table`
  font-family: 'Josefin Sans';
  font-weight: bold;
  font-size: 18px;
  width: 60%;
  display: block;
  margin: 0 auto;
`;

const Button = styled.button`
  border: none;
  background-color: #FC527F;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 3em;
  font-size: 20px;
  display: block;
  margin: 0 auto;
  width: 13em;
  border-radius: 2px;
  margin-top: 5%;
  margin-bottom: 5%;
`;

function AboutContent() {
  return (
    <Background>
      <div className="row">
        <div className="col-sm-6">
          <Table className="table" >
            <tbody>
              <tr>
                <td>Group Lessons</td>
                <td>$69</td>
              </tr>
              <tr>
                <td>Private Lessons</td>
                <td>$99</td>
              </tr>
              <tr>
                <td>Travel Charge</td>
                <td>$10</td>
              </tr>
            </tbody>
          </Table>
          <Button className="btn btn-default">Book a Lesson</Button>
        </div>
        <div className="col-sm-6">
          <p className="rates-text">All Silicon Beach Music instructors are music industry professionals and the philosophy of our curriculum is based around practical application seamlessly integrated with a solid music theory foundation.  We believe that nothing should be learned to be played without first being understood, and make sure that you are playing from day one.</p>
        </div>
      </div>
    </Background>
  );
}

AboutContent.propTypes = {

};

export default AboutContent;
