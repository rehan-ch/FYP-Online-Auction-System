import React, {useState} from 'react'
import "../styles/message.css"
import { getAuth } from "firebase/auth";

function Message(props) {
    const auth = getAuth();
    const [name,setName] = useState(auth.currentUser.displayName);
    const [email,setEmail] = useState(auth.currentUser.email);

  
    if (!props.admin){
        return (
                <div className='messageWrapper'>
                    <div className='messageContainer userMessage'>
                        <div  id="profileImage">{name.charAt(0).toUpperCase()}</div>
                        <div className='messageText'>{props.content}</div>
                    </div>
                </div>
            )
    }
    else{
        return(
            <div className='messageWrapper'>
                <div className='messageContainer adminMessage'>
                    <div  id="profileImage">{name.charAt(0).toUpperCase()}</div>
                    <div className='messageText'>{props.content}</div>
                </div>
            </div>
        )
    }

}

export default Message