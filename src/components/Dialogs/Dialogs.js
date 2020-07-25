import React from "react";
import Dialog from "./Dialog/Dialog";
import styles from "./Dialogs.module.scss";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <Dialog name={dialog.name} key={dialog.id} id={"/" + dialog.id} />
  ));
  let messageElements = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));

  let onAddMessage = () => {
    props.addMessage();
  };

  let onMessageChangeText = (e) => {
    props.onMessageChange(e.target.value);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>{dialogsElements}</div>
      <div className={styles.dialogs__messages}>
        {messageElements}
        <div>
          <textarea
            value={props.dialogsPage.newMessageText}
            onChange={onMessageChangeText}
            placeholder="Enter new message"></textarea>
        </div>
        <button onClick={onAddMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
