/**
*
* Intro
*
*/

import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  color: #F5F5F5;
  font-family: 'Monoton';
  text-align: center;
  font-size: 54px;
  font-weight: normal;
  margin-top: 0;
  padding-top: 3%;
`;

const Btn1 = styled.button`
  display: block;
  border: none;
  font-family: 'Expletus Sans';
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 3em;
  width: 85%;
  margin: 0 auto;
  font-size: 20px !important;
  margin-bottom: 3%;
  background-color: transparent;
  color: #24A5DA;
  border: 3px solid #24A5DA;
  outline: 0;
  white-space: normal;

  &:hover, &:focus, &:active:hover, &:active:focus, &:active:visited {
    background-color: #24A5DA;
    border: none;
    outline: 0;
    color: black;
  }
`;

const Btn2 = styled.button`
  border: none;
  display: block;
  font-family: 'Expletus Sans';
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 3em;
  width: 85%;
  margin: 0 auto;
  font-size: 20px !important;
  margin-bottom: 3%;
  background-color: transparent;
  color: #FF5349;
  border: 3px solid #FF5349;
  outline: 0;
  white-space: normal;

  &:hover, &:focus, &:active:hover, &:active:focus, &:active:visited {
    background-color: #FF5349;
    border: none;
    outline: 0;
    color: black;
  }
`;

const Btn3 = styled.button`
  border: none;
  display: block;
  font-family: 'Expletus Sans';
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 3em;
  width: 85%;
  margin: 0 auto;
  font-size: 20px !important;
  margin-bottom: 3%;
  background-color: transparent;
  color: #FC527F;
  border: 3px solid #FC527F;
  outline: 0;
  white-space: normal;

  &:hover, &:focus, &:active:hover, &:active:focus, &:active:visited {
    background-color: #FC527F;
    border: none;
    outline: 0;
    color: black;
  }
`;

const CtaBtn = styled.button`
  border: 2px solid #16FF97;
  color: #16FF97;
  background-color: #000000;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 3em;
  font-size: 20px;
  display: block;
  margin: 0 auto;
  width: 66%;
  border-radius: 2px;
  margin: 5% auto;
  &:hover, &:focus, &:active:hover, &:active:focus, &:active:visited {
    background-color: #16FF97;
    border: none;
    font-weight: bold;
  }
`;



class Intro extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(key) {
    this.setState({ currentTab: key });
  }

  render() {
    const { currentTab } = this.state;
    let display1 = 'none';
    let display2 = 'none';
    let display3 = 'none';
    (currentTab === 1) ? display1 = 'block' : display1;
    (currentTab === 2) ? display2 = 'block' : display2;
    (currentTab === 3) ? display3 = 'block' : display3;
    return (
      <div style={{ backgroundColor: '#000000', color: '#F5F5F5', fontFamily: 'Josefin Sans' }}>
        <StyledHeader>
          Learn to Play in L.A.
        </StyledHeader>
        <div className="container" style={{ padding: '1%' }}>
          <Btn1 className="btn btn-default" onClick={this.selectTab.bind(this, 1)}>Guitar + Ukelele</Btn1>
          <div className="row" style={{ display: display1 }}>
            <div className="col-sm-6">
              <img className="img-responsive" style={{ height: '300px', paddingBottom: '5%' }} src="http://res.cloudinary.com/kurzweg/image/upload/v1499800683/guitar_stock2.jpg" alt="guitars" />
            </div>
            <div className="col-sm-6">
              <p style={{ fontFamily: 'Josefin Sans', fontSize: '18px', lineHeight: '2em', padding: '2%' }}>Guitar and ukulele lessons are designed to get new students playing immediately.  Whether beginning, intermediate or advanced, the curriculum seamlessly emphasizes practical playing and performance with and academic background so that knowledge of your instrument builds on knowledge of general music theory. </p>
            </div>
            <CtaBtn className="btn btn-default">Book a Lesson</CtaBtn>
          </div>
          <Btn2 className="btn btn-default" onClick={this.selectTab.bind(this, 2)}>Music Production</Btn2>
          <div className="row" style={{ display: display2 }}>
            <div className="col-sm-6">
              <img className="img-responsive" style={{ height: '300px', paddingBottom: '5%' }} src="http://res.cloudinary.com/kurzweg/image/upload/v1498265611/production.jpg" alt="studio" />
            </div>
            <div className="col-sm-6">
              <p style={{ fontFamily: 'Josefin Sans', fontSize: '18px', lineHeight: '2em', padding: '2%' }}>Music production lessons are heavily geared toward teaching industry standard methods of audio engineering, recording, mixing and production while simultaneously giving students strong foundational knowledge in music theory and ear training.  Topics such as acoustics and sound reinforcement, audio engineering for media and technology and recording practices are covered as well.</p>
            </div>
            <CtaBtn className="btn btn-default">Book a Lesson</CtaBtn>
          </div>
          <Btn3 className="btn btn-default" onClick={this.selectTab.bind(this, 3)}>Theory + Composition</Btn3>
          <div className="row" style={{ display: display3 }}>
            <div className="col-sm-6">
              <img className="img-responsive" style={{ height: '300px', paddingBottom: '5%' }} src="http://res.cloudinary.com/kurzweg/image/upload/v1498265612/sheetmusic.jpg" alt="sheetmusic" />
            </div>
            <div className="col-sm-6">
              <p style={{ fontFamily: 'Josefin Sans', fontSize: '18px', lineHeight: '2em', padding: '2%' }}>Composition lessons also incorporate a curriculum of practical application along with an academic foundation.  Score writing, MIDI programming and general music production skills are all integrated into the same curriculum so that all students will have the skills necessary to fully realize compositions.  </p>
            </div>
            <CtaBtn className="btn btn-default">Book a Lesson</CtaBtn>
          </div>
        </div>
      </div>
    );
  }
}

Intro.propTypes = {

};

export default Intro;
