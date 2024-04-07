import { useEffect, useState } from "react";
import "./App.css";
import Page1 from "./pages/Page1";
import Page3 from "./pages/page3";
import Page2 from "./pages/page2";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const page = localStorage.getItem("page");
    if (page) {
      // setCurrentPage(parseInt(page));
    }
  }, []);

  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex flex-wrap relative">
        <Page1 currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Page2 currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Page3 currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Page4 currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Page5 currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
}

export default App;
