// /**
// *
// * SuccessModal
// *
// */

import React from 'react';
// import styled from 'styled-components';
import Modal from 'react-modal';
import { Image } from 'cloudinary-react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    marginTop: '20px',
  },
};


function SuccessModal(props) {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Message Sent"
      >
        <div style={{ width: '75%', margin: '0 auto', textAlign: 'center' }}>
          <Image cloudName="kurzweg" publicId="guitartree_red" quality="auto" width="40" responsive  />
          <Image cloudName="kurzweg" publicId="guitartree_watermelon" quality="auto" width="40" responsive  />
          <Image cloudName="kurzweg" publicId="guitartree_blue" quality="auto" width="40" responsive  />
          <h4>Thanks for contacting us. :-) We'll respond to your inquiry within 24 hours.</h4>
        </div>
      </Modal>
    </div>
  );
}

SuccessModal.propTypes = {

};

export default SuccessModal;
