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
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import NavMobile from 'components/common/NavMobile';
import Hero from 'components/home/Hero';
import HeroMobile from 'components/home/HeroMobile';
import Intro from 'components/home/Intro';
import IntroMobile from 'components/home/IntroMobile';
import WW from 'components/home/Ww';
import Social from 'components/home/Social';
import Bio from 'components/home/Bio';
import Logos from 'components/home/Logos';
import Footer from 'components/common/Footer';
import MediaQuery from 'react-responsive';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="HomePage"
          meta={[
            { name: 'Silicon Beach Guitar Lessons', content: 'Guitar, ukelele, music production and theory lessons in Los Angeles. Professional instruction by musicians and composers working in television and entertainment.' },
          ]}
        />
        <MediaQuery minWidth={768}>
          <Nav />
          <Hero />
          <Intro />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <HeroMobile />
          <IntroMobile />
        </MediaQuery>
        <Logos />
        <WW />
        <Bio />
        <Social />
        <Footer />
      </div>
    );
  }
}
