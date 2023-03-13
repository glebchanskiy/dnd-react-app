import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Search from "./Search/Search";
import Create from "./Create/Create";
import View from "./View/View";
import Plant from "./Plant/Plant";
import PlantContainer from "./Plant/PlantContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/search" />} />
          <Route path="/search" element={<Search />} />
          <Route path="/plants" element={<View />} />
          <Route path="/new" element={<Create />} />
          <Route path="/plantName" element={<PlantContainer id={3}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
