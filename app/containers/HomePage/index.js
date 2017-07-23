/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Nav from 'components/common/Nav';
import NavMobile from 'components/common/NavMobile';
import Hero from 'components/home/Hero';
import Intro from 'components/home/Intro';
import WW from 'components/home/Ww';
import Bio from 'components/home/Bio';
import Footer from 'components/common/Footer';
import MediaQuery from 'react-responsive';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <MediaQuery minWidth={768}>
          <Nav />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
        </MediaQuery>
        <Hero />
        <Intro />
        <WW />
        <Bio />
        <Footer />
      </div>
    );
  }
}
