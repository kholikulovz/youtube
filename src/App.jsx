import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Left from "./Components/Left/Left";
import Home from "./Components/Home/Home";
import Channel from "./Components/Channel/Channel";
import Player from "./Components/Player/Player";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Left />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/channel/:user`} element={<Channel />} />
          <Route path={`/channel/:user/:video`} element={<Player />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
