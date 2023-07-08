import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="bg-[#151515] text-white font-oxygen ">
      <div className="w-11/12 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
