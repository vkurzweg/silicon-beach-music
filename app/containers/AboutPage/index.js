/*
 *
 * AboutPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

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
