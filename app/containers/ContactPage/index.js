/*
 *
 * ContactPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Nav from 'components/common/Nav';
import NavMobile from 'components/common/NavMobile';
import Footer from 'components/common/Footer';
import ContactFormContainer from './ContactFormContainer';
import SuccessModal from 'components/contact/SuccessModal';
import ContactHeader from 'components/contact/ContactHeader';
import ContactHeaderMobile from 'components/contact/ContactHeaderMobile';
import MediaQuery from 'react-responsive';
import { selectContact, selectForm } from './selectors';
import { createMessage, openModal, closeModal } from './actions';



export class ContactPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createMessage();
  }

  render() {
    return (
      <div>
        <Helmet
          title="ContactPage"
          meta={[
            { name: 'description', content: 'Description of ContactPage' },
          ]}
        />
        <MediaQuery minWidth={768}>
          <Nav />
          <ContactHeader />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <ContactHeaderMobile />
        </MediaQuery>
        <ContactFormContainer
          handleSubmit={this.handleSubmit}
          modalIsOpen={this.props.modalIsOpen}
          openModal={this.props.openModal}
          closeModal={this.props.closeModal}
        />
        <SuccessModal
          isOpen={this.props.modalIsOpen}
          closeModal={this.props.closeModal}
        />
        <Footer />

      </div>
    );
  }
}


function mapStateToProps(state) {
  const contactState = selectContact(state);
  const modalIsOpen = contactState.get('modalIsOpen');
  return {
    modalIsOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createMessage: () => dispatch(createMessage()),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
