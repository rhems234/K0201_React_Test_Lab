import React, { useState } from "react";

const TestReview = () => {
  const [names, setNames] = useState([
    { id: 1, text: "박준성1" },
    { id: 2, text: "박준성2" },
    { id: 3, text: "박준성3" },
    { id: 4, text: "박준성4" },
  ]);

  const [message, setMessage] = useState([
    { id: 1, text: "메세지1" },
    { id: 2, text: "메세지2" },
    { id: 3, text: "메세지3" },
    { id: 4, text: "메세지4" },
  ]);

  const [inputText, setInputText] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onMessage = (e) => setInputMessage(e.target.value);
  console.log(inputText);
  console.log(inputMessage);

  const onClick = () => {
    const nextNames = names.comcat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onInsert = () => {
    const nextMessage = message.comcat({
      id: nextId,
      text: inputMessage,
    });
    setNextId(nextId + 1);
    setMessage(nextMessage);
    setInputMessage("");
  };

  const onRemove = (id, message) => {
    const nextNames = names.filter((name) => name.id !== id);
    const nextMessage = message.filter((message) => message.id !== id);
    setNames(nextNames);
    setNames(nextMessage);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  const messageList = message.map((message) => (
    <li key={message.id} onDoubleClick={() => onRemove(message.id)}>
      {message.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <br />
      <input value={inputMessage} onChange={onMessage} />
      <button onClick={onClick}>추가</button>
      <ul>
        {nameList}
        {messageList}
      </ul>
    </>
  );
};

export default TestReview;
