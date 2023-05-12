import React, { useEffect, useState } from 'react';
import axios from 'axios';

//component
import TextLinkExample from './Navbar';
import ChatRoomCard from './ChatRoomCard';

//style
import styles from './ChatRoom.module.css';

const ChatRoom = () => {

  const [user, setUser] = useState(null);
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/users');
          setUser(response.data[0]);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div>
       <TextLinkExample />
       <div className={styles.Room}>
         {user && user.chats.map((chat, index) => {
             // Check if the chat object and messages property exist
             if (chat && chat.messages && Array.isArray(chat.messages) && chat.messages) {
               return (
                 <a href='/ChatRoom' style={{textDecoration: 'none'}}>
                   <ChatRoomCard
                     key={index}
                      contactName={chat.contactName}
                      image={chat.image}
                      message={chat.messages.content}
                  />
                </a>
              );
            } else {
              return null; // Skip rendering the ChatCard if the data is missing or invalid
            }
         })}
       </div>
    </div>
  );
};

export default ChatRoom;