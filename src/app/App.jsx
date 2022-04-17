import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Spinner from "./components/Spinner";
import "./App.scss";

const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const Series = lazy(() => import("./pages/Series"));
const Bookmark = lazy(() => import("./pages/Bookmark"));

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/bookmark" element={<Bookmark />} />
          </Routes>
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
