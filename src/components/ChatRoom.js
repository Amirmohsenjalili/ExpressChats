import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
 
//Icon
import SendIcon from "../img/send.svg"

//component
import NavbarPage from "./Navbar";

//style
import styles from "./ChatRoom.module.css";

const ChatRoom = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({});
  const [sendStatus, setSendStatus] = useState(false)

  const AddMsg = (e) => {
    setMessage(e.target.value)
  }

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users/1");
        const msg = response.data.chats[id].messages;
        setUser(response.data)
        const sortedMessages = [...msg].sort(
          (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
          );
          setMessages(sortedMessages);
        } catch (error) {
          console.error(error);
        }
      };
      
      fetchData();
    }, [sendStatus]);
    
    const SendMsg =async () => {
      const newMsg = {
        sender: "John",
        content: message,
        timestamp: new Date().toLocaleString()
      }
      const updatedUser = { ...user }
      updatedUser.chats[id].messages.push(newMsg)
  
      try {
        await axios.patch("http://localhost:3000/users/1", updatedUser);
        setSendStatus(true)
      } catch(error) {
        console.log(error);
      }
    }

  return (
    <div>
      <div className={styles.Room}>
      <NavbarPage />
        <div>
          <div className={styles.msg}>
            {messages.map((msg, index) => (
              <div
              key={index}
              className={ msg.sender === "John" ? styles.right : styles.left }
              >
                <div>{msg.content}</div>
                <div>{msg.timestamp}</div>
              </div>
            ))}
            <div>
            <input placeholder="Message" className={styles.MsgPlace} onChange={AddMsg}/>
            <img src={SendIcon} alt="SendIcon" className={styles.SendIcon} onClick={SendMsg}/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
