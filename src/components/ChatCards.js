import React from 'react';
import PropTypes from 'prop-types';


//style 
import styles from './ChatCards.module.css';

const ChatCard = ({ contactName, image, lastMessage }) => {
  return (
    <div className={styles.container} >
      <img src={image} alt="Contact" className={styles.chatImage} />
      <div className={styles.cards}>
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