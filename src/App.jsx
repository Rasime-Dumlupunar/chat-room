import { useState } from "react";
import Loginpage from "./pages/Loginpage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

function App() {
  // kullanıcı giriş yaptı mı state'i
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  //kullanıcının girdiği oda state'i
  const [room, setRoom] = useState(null);

  // kullanıcının yetkisi yoksa : login sayfasını 
  if (!isAuth) {
    return <Loginpage setIsAuth={setIsAuth} />;
  }

  // kullanıcının yetkisi varsa : oda seçme sayfası
  
  return ( 
    <div className="container">
      {room ? (
        <ChatPage room={room} setRoom={setRoom}/>
        ) : (
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom}/>
        )}
    </div>
  );
}

export default App;
