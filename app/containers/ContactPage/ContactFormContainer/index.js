/*
 *
 * ContactFormContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
import { TextField } from 'redux-form-material-ui';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  width: 15em;
  margin: 0 auto;
  background-color: #FC527F;
  color: black;
  border: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  height: 3em;
  font-size: 20px;
  margin-bottom: 5%;
`;

export class ContactFormContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container" style={{ paddingTop: '2%', width: '75%', margin: '0 auto', textAlign: 'center', fontFamily: 'Josefin Sans', paddingRight: '0', paddingLeft: '0' }}>
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
          <Button id="contactBtn" type="submit" className="btn btn-primary form-btn">Send Message</Button>
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
