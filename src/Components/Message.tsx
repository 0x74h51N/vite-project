interface MessageProps {
  name: string;
}

function Message(props: MessageProps) {
  return (
    <div>
      <h3>Merhaba, {props.name}</h3>
      <p>Nasılsın?</p>
      <div className="button">
        <button onClick={() => alert("İyisin, tebrikler 🥳")}>İyiyim 💩</button>
      </div>
      <div className="button">
        <button onClick={() => alert("Kötüsün, tebrikler 👌")}>
          Kötüyüm 🤣
        </button>
        <label htmlFor="Yarrak"></label>
      </div>
    </div>
  );
}

export default Message;
