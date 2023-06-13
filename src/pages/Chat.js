import React, { useState, useEffect } from 'react'
import "../styles/chat.css"
import Message from '../components/Message'
import NewMessage from '../components/NewMessage'
import {Data} from "../components/Data"
function Chat() {
  const [data, setData] = useState(Data)
  useEffect(() => {
    // get messages from firebase
    // setData() set all messages get form firebase
  });
  return (
    <div className='container chat-container'>
      <div className='messagesWrapper'>
        {data.map((message)=>{
          return(
              <Message admin = {message.admin} content= {message.content} key={message.id}/>
          )
        })}
        < NewMessage setData= {setData} data={data}/>
      </div>
    </div>
  )
}

export default Chat;