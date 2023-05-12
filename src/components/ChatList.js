import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

//component
import TextLinkExample from './Navbar'
import ChatCard from './ChatCards';

//redux
// import { fetchUsers } from '../redux/Users/usersAction'

const ChatList = () => {
  
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users/1');
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []);
  // const dispatch = useDispatch
  // const usersState = useSelector(state => state.usersState)

  // useEffect (() => {
  //   dispatch(fetchUsers())
  // }, [])

    // const user = useSelector((state) => state.data.data);
  
  return (
        <div>
          <TextLinkExample />

          {user && user.chats.map((chat, index) => {
            // Check if the chat object and messages property exist
            if (chat && chat.messages && Array.isArray(chat.messages) && chat.messages.length > 0) {
              return (
                <a href='/ChatRoom' style={{textDecoration: 'none'}}>
                  <ChatCard
                    key={index}
                    contactName={chat.contactName}
                    image={chat.image}
                    lastMessage={chat.messages[chat.messages.length - 1].content}
                  />
                </a>
              );
            } else {
              return null; // Skip rendering the ChatCard if the data is missing or invalid
            }
          })}
      {/* {
        usersState.loading ?
        <h2>Loading ...</h2> :
        usersState.error ?
        <p>Somethin went wrong</p> :
        usersState.users.map(user => <user key={user.id} userData={user} />)
      } */}
        </div>
      );
    };
    
    export default ChatList;