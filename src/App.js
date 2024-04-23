import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import "./sass/global.scss";
import Single from "./components/single/Single";
import FirstNav from "./components/navbar/FirstNav";
import SecondNav from "./components/navbar/SecondNav";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <FirstNav />
      <SecondNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product:id" element={<Single />} />
        <Route path="/like" />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
