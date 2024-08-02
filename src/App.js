import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchScreen from "./screens/SearchScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" Component={HomeScreen} />
          <Route path={"/search"} Component={SearchScreen} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
