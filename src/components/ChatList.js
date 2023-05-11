import React, { useEffect, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

//component
import TextLinkExample from './Navbar'
import User from './shared/User';
import ChatCard from './ChatCards';

//style 
import styles from './ChatList.module.css';


// import Card from 'react-bootstrap/Card';

const ChatList = () => {
    // const user = useSelector((state) => state.data.data);
    
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
          {user && user.chats.map((chat, index) => {
            // Check if the chat object and messages property exist
            if (chat && chat.messages && Array.isArray(chat.messages) && chat.messages.length > 0) {
              return (
                <ChatCard
                  key={index}
                  contactName={chat.contactName}
                  image={chat.image}
                  lastMessage={chat.messages[chat.messages.length - 1].content}
                />
              );
            } else {
              return null; // Skip rendering the ChatCard if the data is missing or invalid
            }
          })}
        </div>
      );
    };
    
    export default ChatList;




    // function WithHeaderAndQuoteExample() {
     
     
    //   return (
    //     <Card>
    //       <TextLinkExample />
    //       <Card.Header>Quote</Card.Header>
    //       <Card.Body>
    //         <blockquote className="blockquote mb-0">
    //           <p>
    //             {' '}
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    //             posuere erat a ante.{' '}
    //           </p>
    //           <footer className="blockquote-footer">
    //             Someone famous in <cite title="Source Title">Source Title</cite>
    //           </footer>
    //         </blockquote>
    //       </Card.Body>
    //     </Card>
    //   );
    // }
    
    
    // export default WithHeaderAndQuoteExample;