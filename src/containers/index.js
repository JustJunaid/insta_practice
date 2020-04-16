import React from "react"
import { chats } from "../utils/constants"

const App = () => {
  let messages
  for (const chat of chats) {
    if (chat.participants.includes("__deleted__bhiebeafeacedigbh")) {
      messages = chat.conversation.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      )
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="heading">Chat between two persons</h1>
        {messages
          // .slice(1, 10)
          .map((message) =>
            message.sender === "just_not_here" ? (
              <div className="chatsOnRight">
                {message.text || "Invalid text"}
              </div>
            ) : (
              <div className="chatsOnLeft">{message.text}</div>
            )
          )}
      </div>
      <div className="inputContainer">
        <input
          className="sendMessageInput"
          placeholder="Enter your message here..."
          type="text"
        />
      </div>
    </>
  )
}

export default App
