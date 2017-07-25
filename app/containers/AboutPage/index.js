/*
 *
 * AboutPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import NavMobile from 'components/common/NavMobile';
import Footer from 'components/common/Footer';
import AboutHeader from 'components/about/AboutHeader';
import AboutHeaderMobile from 'components/about/AboutHeaderMobile';
import AboutContent from 'components/about/AboutContent';
import AboutContentMobile from 'components/about/AboutContentMobile';
import MediaQuery from 'react-responsive';

export class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Silicon Beach Guitar Lessons - About Ali Memarian"
          meta={[
            { name: 'description', content: 'Ali has composed for Emmy Award-winning series over the last decade and is currently a Ph.D. candidate in Musicology.' },
          ]}
        />
        <MediaQuery minWidth={768}>
          <Nav />
          <AboutHeader />
          <AboutContent />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <AboutHeaderMobile />
          <AboutContentMobile />
        </MediaQuery>
        <Footer />
      </div>
    );
  }
}

AboutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AboutPage);
