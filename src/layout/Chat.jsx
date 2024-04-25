import React, { useEffect } from 'react'
import Socket  from 'socket.io-client'
const Chat = () => {
  useEffect(()=>{
    console.log(Socket)
    const s = Socket.connect('http://localhost:3000')
    console.log(s)
    s.send('hello','hey i am client')

  },[])
  return (
    <div>
    

      
      </div>
  )
}

export default Chat