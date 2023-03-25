import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ReadItem from "./components/ReadItem/ReadItem";
import CreateItem from "./components/CreateItem/CreateItem";
import UpdateItem from "./components/UpdateItem/UpdateItem";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ReadItem />} />
        <Route path="/create" element={<CreateItem />} />
        <Route path="/:name" element={<UpdateItem />} />
      </Routes>
      <div>
        <Link key="create" to="/create">
          Create
        </Link>
        <Link key="read" to="/">
          Webshop
        </Link>
      </div>
    </div>
  );
}

export default App;
