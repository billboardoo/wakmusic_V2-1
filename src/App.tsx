import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./stylesheets/index.css";
import "./stylesheets/main.css";
import "./stylesheets/artist.css";
// import Main from "./pages/Main";
// import News from "./pages/News";
// import Artists from "./pages/Artists";
// import Albums from "./pages/Albums";
// import Teams from "./pages/Teams";
// import Charts from "./pages/Charts";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
// import Player from "./pages/Player";
// import MyPage from "./pages/MyPage";
// import Support from "./pages/Support";
// import Profile from "./pages/Profile";
// import Playlist from "./pages/Playlist";
// import AddMusic from "./pages/AddMusic";
// import GetArtistPage from "./components/Artists/GetArtistPage";

interface userInfoType {
  name: string;
  id: string;
  platform: "google" | "apple" | "naver" | "";
  profile: string;
  first: boolean;
}

function App() {
  const [userInfo, setUserInfo] = useState<userInfoType>({
    name: "",
    id: "",
    platform: "",
    profile: "",
    first: false,
  });

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header userInfo={userInfo} setUserInfo={setUserInfo} />
        <Routes>
          <Route path="/" element={<div style={{ height: "1000px" }} />} />
          {/* <Route path="/" element={<Main />} /> */}
          {/* <Route path="/news" element={<News />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artist/:id" element={<GetArtistPage />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/player/:id" element={<Player />} />
          <Route
            path="/mypage"
            element={<MyPage userInfo={userInfo} setUserInfo={setUserInfo} />}
          />
          <Route path="/profile" element={<Profile userInfo={userInfo} />} />
          <Route path="/support" element={<Support />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/playlist/:id" element={<Playlist />} />
          <Route path="/add" element={<AddMusic />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
