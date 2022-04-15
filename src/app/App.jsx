import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmark from "./pages/Bookmark";
import store from "./redux/store";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
