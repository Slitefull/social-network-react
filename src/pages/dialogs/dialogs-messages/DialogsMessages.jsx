import React from "react";

import { AddMessageContainer } from './index'


const NewMessage = ({ message }) => ( <div className = "message"> Message: { message } </div> )

export const DialogsMessages = ({ messages }) => {
  const messagesElements = messages.map(m => <NewMessage key = { m.id } {...m} />)

  return (
    <div className = "messages">
      <AddMessageContainer />
      { messagesElements }
    </div>
  )
}
