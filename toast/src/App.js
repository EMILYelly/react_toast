import logo from "./logo.svg";
import "./App.css";
import Toast from "./component/Toast";
import Toast2 from "./component/Toast2";
import "./component/Toast.css";

function App() {
  const toastMessages = [
    { title: "success", text: "Right On!" },
    {
      title: "warning",
      text: "Hmmm!",
    },
    {
      title: "error",
      text: "Oh!",
    },
    {
      title: "success",
      text: "great!",
    },
    {
      title: "warning",
      text: "More consider",
    },
  ];

  return (
    <div className="wrapper">
      <br />
      <p>React 학습을 위한 Toast 연습</p>
      <p>STEP1: JSX만을 사용해서 만들기 </p>
      <div className="toast toast-success">
        <main className="toast__message">
          <headers className="toast__message-title">Success</headers>
          <p className="toast__message-text">Right On!</p>
        </main>
        <button className="toast__button">Dismiss</button>
      </div>

      <div className="toast toast-warning">
        <main className="toast__message">
          <headers className="toast__message-title">Warning</headers>
          <p className="toast__message-text">Hmmm!</p>
        </main>
        <button className="toast__button">Dismiss</button>
      </div>

      <div className="toast toast-error">
        <main className="toast__message">
          <headers className="toast__message-title">Error</headers>
          <p className="toast__message-text">oh!</p>
        </main>
        <button className="toast__button">Dismiss</button>
      </div>
      <p>STEP2: Toast 컴포넌트를 사용해서 만들기 </p>
      <Toast
        title={toastMessages[0].title}
        text={toastMessages[0].text}
      ></Toast>
      <Toast
        title={toastMessages[1].title}
        text={toastMessages[1].text}
      ></Toast>
      <p>STEP3: STEP2 + map을 사용해서 만들기 </p>
      {toastMessages.map((message) => {
        return <Toast title={message.title} text={message.text}></Toast>;
      })}
      <p>
        STEP4: STEP3 + props를 좀 더 간단하게 넘기기
        <br /> -Toast2 새롭게 사용
      </p>
      {toastMessages.map((message) => {
        return <Toast2 message={message}></Toast2>;
      })}
    </div>
  );
}

export default App;
