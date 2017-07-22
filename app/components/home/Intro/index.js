/**
*
* Intro
*
*/

import React from 'react';
import styled from 'styled-components';

const BtnGroup = styled.div`
  width: 90%;
  text-align: center;
  display: block;
  margin: 0 auto;
  padding-top: 3%;
  cursor: pointer;
`;

const Btn1 = styled.button`
  border: none;
  font-family: 'Expletus Sans';
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 4em;
  width: 33%;
  font-size: 20px !important;
  margin-bottom: 5%;
  background-color: transparent;
  color: #24A5DA;
  border: 3px solid #24A5DA;
  outline: 0;

  &:hover, &:focus, &:active:hover, &:active:focus, &:active:visited {
    background-color: #24A5DA;
    border: none;
    outline: 0;
    color: black;
  }
`;

const Btn2 = styled.button`
  border: none;
  font-family: 'Expletus Sans';
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 4em;
  width: 33%;
  font-size: 20px !important;
  margin-bottom: 5%;
  background-color: transparent;
  color: #FF5349;
  border: 3px solid #FF5349;
  outline: 0;

  &:hover, &:focus, &:active:hover, &:active:focus, &:active:visited {
    background-color: #FF5349;
    border: none;
    outline: 0;
    color: black;
  }
`;

const Btn3 = styled.button`
  border: none;
  font-family: 'Expletus Sans';
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 4em;
  width: 33%;
  font-size: 20px !important;
  margin-bottom: 5%;
  background-color: transparent;
  color: #FC527F;
  border: 3px solid #FC527F;
  outline: 0;

  &:hover, &:focus, &:active:hover, &:active:focus, &:active:visited {
    background-color: #FC527F;
    border: none;
    outline: 0;
    color: black;
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
      <div style={{ backgroundColor: '#000000', color: '#F5F5F5' }}>
        <BtnGroup className="btn-group btn-group-lg">
          <Btn1 className="btn btn-default" onClick={this.selectTab.bind(this, 1)}>Guitar + Ukelele</Btn1>
          <Btn2 className="btn btn-default" onClick={this.selectTab.bind(this, 2)}>Music Production</Btn2>
          <Btn3 className="btn btn-default" onClick={this.selectTab.bind(this, 3)}>Theory + Composition</Btn3>
        </BtnGroup>
        <div className="container">
          <div className="row" style={{ display: display1 }}>
            <div className="col-sm-6">
              <img className="img-responsive" style={{ height: '300px' }} src="http://res.cloudinary.com/kurzweg/image/upload/v1499800683/guitar_stock2.jpg" alt="guitars" />
            </div>
            <div className="col-sm-6">
              <p>Guitar and ukulele lessons are designed to get new students playing immediately.  Whether beginning, intermediate or advanced, the curriculum seamlessly emphasizes practical playing and performance with and academic background so that knowledge of your instrument builds on knowledge of general music theory. </p>
            </div>
            <button className="btn btn-default">Book a Lesson</button>
          </div>
          <div className="row" style={{ display: display2 }}>
            <div className="col-sm-6">
              <img className="img-responsive" style={{ height: '300px' }} src="http://res.cloudinary.com/kurzweg/image/upload/v1498265611/production.jpg" alt="studio" />
            </div>
            <div className="col-sm-6">
              <p>Music production lessons are heavily geared toward teaching industry standard methods of audio engineering, recording, mixing and production while simultaneously giving students strong foundational knowledge in music theory and ear training.  Topics such as acoustics and sound reinforcement, audio engineering for media and technology and recording practices are covered as well.</p>
            </div>
            <button className="btn btn-default">Book a Lesson</button>
          </div>
          <div className="row" style={{ display: display3 }}>
            <div className="col-sm-6">
              <img className="img-responsive" style={{ height: '300px' }} src="http://res.cloudinary.com/kurzweg/image/upload/v1498265612/sheetmusic.jpg" alt="sheetmusic" />
            </div>
            <div className="col-sm-6">
              <p>Composition lessons also incorporate a curriculum of practical application along with an academic foundation.  Score writing, MIDI programming and general music production skills are all integrated into the same curriculum so that all students will have the skills necessary to fully realize compositions.  </p>
            </div>
            <button className="btn btn-default">Book a Lesson</button>
          </div>
        </div>
      </div>
    );
  }
}

Intro.propTypes = {

};

export default Intro;