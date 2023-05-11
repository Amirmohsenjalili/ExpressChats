import React from 'react';
import PropTypes from 'prop-types';

const ChatCard = ({ contactName, image, lastMessage }) => {
  return (
    <div className="chat-card">
      <img src={image} alt="Contact" className="chat-card__image" />
      <div className="chat-card__content">
        <h3 className="chat-card__contact-name">{contactName}</h3>
        <p className="chat-card__last-message">{lastMessage}</p>
      </div>
    </div>
  );
};

ChatCard.propTypes = {
  contactName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired
};

export default ChatCard;