/*
 *
 * RatesPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import NavMobile from 'components/common/NavMobile';
import Footer from 'components/common/Footer';
import RatesHeader from 'components/rates/RatesHeader';
import RatesHeaderMobile from 'components/rates/RatesHeaderMobile';
import RatesContent from 'components/rates/RatesContent';
import RatesContentMobile from 'components/rates/RatesContentMobile';
import MediaQuery from 'react-responsive';


export class RatesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="RatesPage"
          meta={[
            { name: 'description', content: 'Description of RatesPage' },
          ]}
        />
        <MediaQuery minWidth={768}>
          <Nav />
          <RatesHeader />
          <RatesContent />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <RatesHeaderMobile />
          <RatesContentMobile />
        </MediaQuery>
        <Footer />

      </div>
    );
  }
}

RatesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(RatesPage);
