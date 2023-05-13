import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



//style 
import styles from './ChatCards.module.css';

const ChatCard = ({ contactName, image, lastMessage, id }) => {

 
  return (
    <Link to={`/ChatList/${id}`} className={styles.Link}>
      <div className={styles.container}>
        <img src={image} alt="Contact" className={styles.chatImage} />
        <div className={styles.cards}>
          <h3 className="chat-card__contact-name">{contactName}</h3>
          <p className="chat-card__last-message">{lastMessage}</p>
        </div>
      </div>
    </Link>
  );
};

ChatCard.propTypes = {
  contactName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired
};

export default ChatCard;