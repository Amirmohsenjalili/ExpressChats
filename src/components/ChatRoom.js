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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users/1");
        const msg = response.data.chats[id].messages;
        const sortedMessages = [...msg].sort(
          (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
        );
        setMessages(sortedMessages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.Room}>
      <NavbarPage />
        <div>
          <div className={styles.msg}>
            {messages.map((msg, index) => (
              <div
              className={ msg.sender === "John" ? styles.right : styles.left }
                key={index}
              >
                <div>{msg.content}</div>
                <div>{msg.timestamp}</div>
              </div>
            ))}
            <div>
            <input placeholder="Message" className={styles.MsgPlace}/>
            <img src={SendIcon} alt="SendIcon" className={styles.SendIcon}/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
