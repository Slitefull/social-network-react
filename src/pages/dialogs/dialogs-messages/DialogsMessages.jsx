import React from "react";

import { NewMessage, AddMessageContainer } from '../index';


export const DialogsMessages = ({ messages }) => {
  const messagesElements = messages.map(m => <NewMessage key = { m.id } {...m} />)

  return (
    <div className = "messages">
      <AddMessageContainer />
      { messagesElements }
    </div>
  )
}
