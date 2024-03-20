import "./App.css";
import MainPage from "./app/pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./app/state/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<MainPage />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
