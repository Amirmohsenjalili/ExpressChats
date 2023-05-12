import React from 'react';
import PropTypes from 'prop-types';


const ChatRoomCard = ({ contactName, image, message }) => {
    return (
      <div >
        <img src={image} alt="Contact"/>
        <div>
          <h3 className="chat-room-card__contact-name">{contactName}</h3>
          <p className="chat-room-card__-message">{message}</p>
        </div>
      </div>
    );
  };
  
  ChatRoomCard.propTypes = {
    contactName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  };
  
  export default ChatRoomCard;