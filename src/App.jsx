import "./App.scss";
import { Routes, Route, useParams } from "react-router-dom";
import Header from "./Components/Header/Header";
import Left from "./Components/Left/Left";
import Home from "./Components/Home/Home";
import Channel from "./Components/Channel/Channel";
import Player from "./Components/Player/Player";
import UserData from "./Data/UserData";

function App() {
  // const params = useParams()
  // console.log(params)
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Left />
        <Routes>
          <Route path="/" element={<Home />} />
          {UserData.map((user)=>{
            return(
            <>
            <Route path={`/channel/${user.id}`} element={<Channel />} />
            {user.url.map((urls)=>{
              return(<Route path={`/player/${urls.id}`} element={<Player/>} />)
            })}
            </>
            )
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
