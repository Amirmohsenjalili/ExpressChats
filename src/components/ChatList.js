import React, { useState ,useEffect } from 'react';

//component
import NavbarPage from './Navbar';
import ChatCard from './ChatCards';

//redux
import { useSelector } from 'react-redux';

const ChatList = () => {
  
  const [user, setUser] = useState(null);
  const data = useSelector(state => state.usersState.myUser);
  
  useEffect(() => {
    setUser(data)
  }, []);
  console.log(user);
  
  return (
    
    <div>
          <NavbarPage />
          {user && user.chats.map((chat, index) => {
            // Check if the chat object and messages property exist
            if (chat && chat.messages && Array.isArray(chat.messages) && chat.messages.length > 0) {
              return (
                <div>
                  <ChatCard
                    key={index}
                    contactName={chat.contactName}
                    image={chat.image}
                    lastMessage={chat.messages[chat.messages.length - 1].content}
                    id={chat.id}
                    />
                </div>
              );
            } else {
              return null; // Skip rendering the ChatCard if the data is missing or invalid
            }
          })}
        </div>
      );
    };
    
    export default ChatList;
    /* {
      usersState.loading ?
      <h2>Loading ...</h2> :
      usersState.error ?
      <p>Somethin went wrong</p> :
          usersState.users.map(user => <user key={user.id} userData={user} />)
        } */
        // const dispatch = useDispatch();
        // const user = useSelector((state) => state.usersState.users);
        // const loading = useSelector((state) => state.loading);
        // const error = useSelector((state) => state.error);
        
        // useEffect(() => {
          // Dispatch the fetchData action when the component mounts
          //   dispatch(fetchUsers());
          // }, []);
          // const user = useSelector(state => state.usersState)
          
          
          
          
          
          
          
          
          // import axios from 'axios';
          // useEffect( async() => {
          //   const data = await useSelector(state => state.usersState.myUser);
          //   setUser(data)
          //   console.log(data);
          //   const userData = data
          //   console.log("ch",userData);
          // }, [])
         
        
          // useEffect(() => {
          //   dispatch(fetchUsers());
          //   setUser(userData);
            // const fetchData = async () => {
            //   try {
            //     const response = await axios.get('http://localhost:3000/users/1');
            //     setUser(response.data);
            //   } catch (error) {
            //     console.error(error);
            //   }
            // };
            
            // fetchData();
          // }, []);
          