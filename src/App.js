import Navbar from './components/navbar';
import Upload from './components/upload';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './components/details';

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="upload" element={<Upload />} />
          <Route path="/details/:data" element={<Details/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
