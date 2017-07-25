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
  margin-top: 3%;
  line-height: 1.5em;
  padding: 2%;
`;

function AboutContent() {
  return (
    <Background>
      <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Ali A. Memarian has composed for Emmy Award winning series such as <em>Project Runway</em>, <em>Top Chef</em>, HBO's <em>Project Greenlight</em>, TLC's <em>Who Do You Think You Are?</em> and Bravo's <em>The Real Housewives</em> franchise for the past decade.  He graduated from Berklee College of Music as a guitar principal with a B.M. in composition in 2006, and is currently a PhD candidate in Musicology at Claremont Graduate University.<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  With over twenty years of playing guitar, a decade of songwriting and producing songs for feature films and composing for internationally syndicated television and advertisement, Ali’s extensive list of credits is only matched by his passion for imparting the enthusiasm for music he still feels every time he picks up a guitar or heads into the studio. </p>
    </Background>
  );
}

AboutContent.propTypes = {

};

export default AboutContent;
