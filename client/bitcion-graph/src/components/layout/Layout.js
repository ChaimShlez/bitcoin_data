import { BrowserRouter, Routes, Route } from "react-router-dom"; // Make sure to import these
import HomePage from "../main/home-page/HomePage";


export default function Layout() {
  return (
    <section className="Layout">
      <BrowserRouter>
      
      
        <main>
          <Routes>
            <Route path="/" element={< HomePage/>} />
            
          </Routes>
        </main>
      </BrowserRouter>
    </section>
  );
}
