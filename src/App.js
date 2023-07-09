import { Route, Routes } from "react-router-dom";
import Article from "./components/article/Article";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="bg-[#151515] text-white font-oxygen ">
      <div className="w-11/12 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
