/*
 *
 * ContactFormContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
import { TextField } from 'redux-form-material-ui';

export class ContactFormContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container" style={{ paddingTop: '10%', width: '75%', margin: '0 auto', textAlign: 'center' }}>
        <form onSubmit={this.props.handleSubmit}>
          <div className="row">
              <div className="col-sm-4 form-group fields">
                <label className="form-label" htmlFor="name">Name</label>
                <Field name="contactName" component={TextField} />
              </div>
              <div className="col-sm-4 form-group fields">
                <label className="form-label" htmlFor="contactEmail">Email</label>
                <Field name="contactEmail" component={TextField} />
              </div>
              <div className="col-sm-4 form-group fields">
                <label className="form-label" htmlFor="contactPhone">Phone</label>
                <Field name="contactPhone" component={TextField} />
              </div>
            </div>
            <div className="row">
              <div className="form-group fields">
                <label className="form-label" htmlFor="contactPhone" style={{ textAlign: 'center' }}>Type of Lesson + Number of People Booking</label>
                <Field name="contactMessage" component={TextField} fullWidth />
              </div>
            </div>
          <button id="contactBtn" type="submit" class="btn btn-primary form-btn">Send Message</button>
        </form>
      </div>
    );
  }
}

ContactFormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

ContactFormContainer = reduxForm({
  form: 'contact',
})(ContactFormContainer);

export default connect(null, mapDispatchToProps)(ContactFormContainer);
