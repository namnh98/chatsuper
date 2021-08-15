import React, { useState } from "react";
import "./App.css";

import { auth } from "./FirebaseConfig";

function App() {
  // const user = React.useState({});
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const signIn = () => {
    if (!name) {
      alert("Bạn chưa nhập gì kìa ....");
    } else {
      auth()
        .signInAnonymously()
        .then(() => alert("OKe nha"))
        .catch((error) => {
          console.log("lỗi", error);
          throw error;
        });
    }
  };
  return (
    <div className="App">
      <header>Super Chat</header>
      <div>
        <h1>Tên chat của bạn</h1>
        <div className="input-main">
          <input
            type="text"
            name="111"
            className="input-signin"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="button-signin">
          <button className="sign-in" onClick={signIn}>
            Vô box chat nào !
          </button>
        </div>
      </div>
    </div>
  );
}

// function SignOut() {
//   return (
//     auth.currentUser && (
//       <button className="sign-out" onClick={() => auth.signOut()}>
//         Sign Out
//       </button>
//     )
//   );
// }

// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection("messages");
//   const query = messagesRef.orderBy("createdAt").limit(25);

//   const [messages] = useCollectionData(query, { idField: "id" });

//   const [formValue, setFormValue] = useState("");

//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL,
//     });

//     setFormValue("");
//     dummy.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <>
//       <main>
//         {messages &&
//           messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

//         <span ref={dummy}></span>
//       </main>

//       <form onSubmit={sendMessage}>
//         <input
//           value={formValue}
//           onChange={(e) => setFormValue(e.target.value)}
//           placeholder="say something nice"
//         />

//         <button type="submit" disabled={!formValue}>
//           🕊️
//         </button>
//       </form>
//     </>
//   );
// }

// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

//   return (
//     <>
//       <div className={`message ${messageClass}`}>
//         <img
//           src={
//             photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
//           }
//         />
//         <p>{text}</p>
//       </div>
//     </>
//   );
// }

export default App;